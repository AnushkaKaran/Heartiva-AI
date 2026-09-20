export const calculateBMI = (height, weight) => {
  const h = parseFloat(height);
  const w = parseFloat(weight);

  if (!h || !w || h <= 0 || w <= 0 || isNaN(h) || isNaN(w)) {
    return null;
  }

  // Height is in cm, weight is in kg
  const heightInMeters = h / 100;
  const bmi = w / (heightInMeters * heightInMeters);

  return parseFloat(bmi.toFixed(1));
};

export const getBMIStatus = (bmi) => {
  if (!bmi) return { label: "Not available", status: "Monitor" };

  if (bmi < 18.5) {
    return {
      label: "Underweight",
      status: "Needs Attention",
    };
  }

  if (bmi >= 18.5 && bmi < 25) {
    return {
      label: "Healthy Range",
      status: "Healthy",
    };
  }

  if (bmi >= 25 && bmi < 30) {
    return {
      label: "Overweight",
      status: "Needs Attention",
    };
  }

  return {
    label: "Obesity Range",
    status: "Risk Factor",
  };
};

export const getBMIExplanation = (bmi) => {
  if (!bmi) return "BMI calculation is currently unavailable.";

  if (bmi < 18.5) {
    return "Your BMI is below the commonly used healthy range. Consider discussing nutritional strategies with a healthcare professional.";
  }

  if (bmi >= 18.5 && bmi < 25) {
    return "Your BMI is within the commonly used healthy range. Maintaining a healthy weight supports cardiovascular health.";
  }

  if (bmi >= 25 && bmi < 30) {
    return "Your BMI is in the overweight range. Gradual weight management may support cardiovascular health.";
  }

  return "Your BMI is in the obesity range, which is often associated with elevated cardiovascular risk. Consider discussing weight management strategies with a healthcare professional.";
};

export const analyzeBloodPressure = (sys, dia) => {
  const s = parseInt(sys, 10);
  const d = parseInt(dia, 10);

  if (isNaN(s) || isNaN(d) || s <= 0 || d <= 0) {
    return {
      label: "Not available",
      status: "Monitor",
      display: "N/A",
      message: "Blood pressure values are incomplete or invalid.",
    };
  }

  const display = `${s} / ${d}`;

  // Healthy reference range
  // This project treats 120/80 as a healthy reference reading.
  if (s <= 120 && d <= 80) {
    return {
      label: "Healthy Range",
      status: "Healthy",
      display,
      message:
        "Your blood pressure reading is within the healthy reference range. Continue regular monitoring and healthy lifestyle habits.",
    };
  }

  // Elevated but below the high blood pressure threshold
  if (s < 140 && d < 90) {
    return {
      label: "Elevated",
      status: "Needs Attention",
      display,
      message:
        "Your blood pressure is above the healthy reference range but below the high blood pressure threshold. Continue monitoring and discuss persistent changes with a healthcare professional.",
    };
  }

  // High blood pressure range
  if (s >= 140 || d >= 90) {
    return {
      label: "High Blood Pressure",
      status: "Risk Factor",
      display,
      message:
        "This reading is in the high blood pressure range. A single reading does not diagnose hypertension; repeated measurements and professional assessment are needed.",
    };
  }

  return {
    label: "Monitor",
    status: "Monitor",
    display,
    message: "Continue regular blood pressure monitoring.",
  };
};

export const analyzeCholesterol = (level) => {
  if (!level) {
    return {
      label: "Not available",
      status: "Monitor",
      display: "N/A",
      message: "Cholesterol data is missing.",
    };
  }

  if (level === "Normal") {
    return {
      label: "Healthy Range",
      status: "Healthy",
      display: level,
      message:
        "Your cholesterol level is reported as normal. Maintain a balanced diet and regular physical activity to support long-term heart health.",
    };
  }

  if (level === "Above Normal") {
    return {
      label: "Needs Attention",
      status: "Needs Attention",
      display: level,
      message:
        "Your cholesterol level is above normal, which may increase cardiovascular risk. Consider maintaining a balanced diet and staying physically active.",
    };
  }

  if (level === "Well Above Normal") {
    return {
      label: "Risk Factor",
      status: "Risk Factor",
      display: level,
      message:
        "Your cholesterol is well above normal, which can be an important cardiovascular risk factor. Consider discussing cholesterol management with a healthcare professional.",
    };
  }

  return {
    label: level,
    status: "Monitor",
    display: level,
    message: "Continue monitoring your cholesterol levels.",
  };
};

export const analyzeGlucose = (level) => {
  if (!level) {
    return {
      label: "Not available",
      status: "Monitor",
      display: "N/A",
      message: "Glucose data is missing.",
    };
  }

  if (level === "Normal") {
    return {
      label: "Healthy Range",
      status: "Healthy",
      display: level,
      message:
        "Your glucose level is currently within the selected healthy range. Continue maintaining healthy lifestyle habits.",
    };
  }

  if (level === "Above Normal") {
    return {
      label: "Needs Attention",
      status: "Needs Attention",
      display: level,
      message:
        "Your glucose level is above normal. This may be an early indicator of metabolic changes; consider mindful nutritional choices.",
    };
  }

  if (level === "Well Above Normal") {
    return {
      label: "Risk Factor",
      status: "Risk Factor",
      display: level,
      message:
        "Your glucose level is well above normal, which is commonly associated with elevated cardiovascular risk. Consider discussing this with a healthcare professional.",
    };
  }

  return {
    label: level,
    status: "Monitor",
    display: level,
    message: "Continue monitoring your glucose levels.",
  };
};

export const analyzeLifestyle = (factorType, value) => {
  if (!value) {
    return {
      label: "Not available",
      status: "Monitor",
      display: "N/A",
      message: "Data is missing.",
    };
  }

  if (factorType === "smoking") {
    if (value === "Yes") {
      return {
        label: "Risk Factor",
        status: "Risk Factor",
        display: value,
        message:
          "Smoking is an important cardiovascular risk factor. Reducing or quitting smoking can significantly support long-term heart health.",
      };
    }

    return {
      label: "Healthy",
      status: "Healthy",
      display: value,
      message:
        "No smoking reported. Avoiding tobacco exposure is beneficial for cardiovascular health.",
    };
  }

  if (factorType === "activity") {
    if (value === "No") {
      return {
        label: "Needs Improvement",
        status: "Needs Attention",
        display: value,
        message:
          "Regular physical activity supports cardiovascular health. Gradually building a consistent activity routine may be beneficial.",
      };
    }

    return {
      label: "Healthy Habit",
      status: "Healthy",
      display: value,
      message:
        "You reported regular physical activity. Maintaining this routine is beneficial for supporting long-term cardiovascular health.",
    };
  }

  return {
    label: value,
    status: "Monitor",
    display: value,
    message: "",
  };
};

export const generateRecommendations = (patientData, bmi) => {
  const recs = [];

  if (bmi && (bmi >= 25 || bmi < 18.5)) {
    recs.push(
      "Focus on maintaining a healthy weight through balanced nutrition and regular physical activity.",
    );
  }

  const sys = parseInt(patientData.systolicBP, 10);
  const dia = parseInt(patientData.diastolicBP, 10);

  // Match the BP classification used above:
  // high blood pressure range = systolic >= 140 OR diastolic >= 90
  if ((sys && sys >= 140) || (dia && dia >= 90)) {
    recs.push(
      "Consider lifestyle adjustments to support healthy blood pressure, such as reducing dietary sodium and managing stress.",
    );
  }

  if (
    patientData.cholesterol &&
    patientData.cholesterol !== "Normal"
  ) {
    recs.push(
      "Consider reducing saturated and trans fats, increasing fiber-rich foods, and discussing cholesterol management with a healthcare professional.",
    );
  }

  if (patientData.glucose && patientData.glucose !== "Normal") {
    recs.push(
      "Mindful nutritional choices, focusing on whole foods and reducing added sugars, may help support healthy glucose levels.",
    );
  }

  if (patientData.smoking === "Yes") {
    recs.push(
      "Consider reducing or quitting smoking to support cardiovascular health.",
    );
  }

  if (patientData.physicalActivity === "No") {
    recs.push(
      "Gradually work toward a consistent physical activity routine appropriate for your health and fitness level.",
    );
  }

  if (recs.length === 0) {
    recs.push(
      "Your current profile shows several positive cardiovascular health indicators. Continue maintaining healthy lifestyle habits and regular monitoring.",
    );
  }

  return recs;
};