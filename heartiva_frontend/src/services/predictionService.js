const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const predictRisk = async (patientData) => {
  try {
    const backendData = {
      age: Number(patientData.age),
      gender:
        patientData.gender === "Female"
          ? 1
          : patientData.gender === "Male"
            ? 2
            : 1,

      height: Number(patientData.height),
      weight: Number(patientData.weight),

      ap_hi: Number(patientData.systolicBP),
      ap_lo: Number(patientData.diastolicBP),

      cholesterol:
        patientData.cholesterol === "Normal"
          ? 1
          : patientData.cholesterol === "Above Normal"
            ? 2
            : 3,

      gluc:
        patientData.glucose === "Normal"
          ? 1
          : patientData.glucose === "Above Normal"
            ? 2
            : 3,

      smoke: patientData.smoking === "Yes" ? 1 : 0,
      alco: patientData.alcohol === "Yes" ? 1 : 0,
      active: patientData.physicalActivity === "Yes" ? 1 : 0,
    };

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(backendData),
    });

    if (!response.ok) {
      throw new Error(
        `Backend error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    // console.log("Prediction response:", data);
    return data;
  } catch (error) {
    console.error("Error connecting to prediction service:", error);
    throw error;
  }
};
