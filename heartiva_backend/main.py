from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load trained Logistic Regression model
model = joblib.load("heartiva_logistic_model_v2.pkl")

# Load the MinMaxScaler used during preprocessing
scaler = joblib.load("heartiva_scaler_v2.pkl")


@app.post("/predict")
def predict(data: dict):

    print("Received data:", data)

    # Convert age from years to days.
    # The Week 2 dataset stored age in days before scaling.
    age_in_days = float(data["age"]) * 365.25

    # Create DataFrame with the exact numerical columns
    # used when the scaler was fitted.
    numerical_features = pd.DataFrame([{
        "age": age_in_days,
        "height": float(data["height"]),
        "weight": float(data["weight"]),
        "ap_hi": float(data["ap_hi"]),
        "ap_lo": float(data["ap_lo"])
    }])

    # Apply the same MinMaxScaler used during preprocessing.
    scaled_numerical = scaler.transform(numerical_features)

    # Create the final feature DataFrame in the exact
    # order expected by the Logistic Regression model.
    features = pd.DataFrame([[
        scaled_numerical[0][0],  # age
        data["gender"],          # gender
        scaled_numerical[0][1],  # height
        scaled_numerical[0][2],  # weight
        scaled_numerical[0][3],  # ap_hi
        scaled_numerical[0][4],  # ap_lo
        data["cholesterol"],     # cholesterol
        data["gluc"],            # gluc
        data["smoke"],           # smoke
        data["alco"],            # alco
        data["active"]            # active
    ]], columns=[
        "age",
        "gender",
        "height",
        "weight",
        "ap_hi",
        "ap_lo",
        "cholesterol",
        "gluc",
        "smoke",
        "alco",
        "active"
    ])

    # Make the model's classification prediction.
    prediction = model.predict(features)[0]

    # Get probabilities for both classes.
    probabilities = model.predict_proba(features)[0]

    # Class 0 = no cardiovascular disease
    class_0_probability = probabilities[0] * 100

    # Class 1 = cardiovascular disease
    class_1_probability = probabilities[1] * 100

    # Convert the predicted class into a clear model result.
    # This is an ML classification result, not a clinical diagnosis.
    if int(prediction) == 1:
        prediction_label = "Model predicts cardiovascular disease"
    else:
        prediction_label = "Model predicts no cardiovascular disease"

    return {
        "prediction": int(prediction),
        "class0Probability": round(float(class_0_probability), 2),
        "class1Probability": round(float(class_1_probability), 2),
        "predictionLabel": prediction_label
    }