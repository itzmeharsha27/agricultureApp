import React, { useState } from 'react';

export default function CropGuide2() {
  const [crop, setCrop] = useState('');
  const [acres, setAcres] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ crop, acres: Number(acres) }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <>
    <div className="predictor-container">
    <form className="predictor-form" onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Crop Yield Predictor</h2>

      <label>Crop:</label>
      <select value={crop} onChange={(e) => setCrop(e.target.value)} required>
        <option value="">Select Crop</option>
        <option value="Rice">Rice</option>
        <option value="Wheat">Wheat</option>
        <option value="Maize">chilli</option>
        <option value="Cotton">Cotton</option>
        <option value="Sugarcane">Sugarcane</option>
      </select>

      <br /><br />

      <label>Acres:</label>
      <input
        type="number"
        value={acres}
        onChange={(e) => setAcres(e.target.value)}
        required
      />

      <br /><br />
      <button type="submit">Predict Yield</button>

      {result && (
        <div className="result-card">
          <h3>Prediction Result</h3>
          <p>Crop: {result.crop}</p>
          <p>Acres: {result.acres}</p>
          <p>Expected Yield: {result.predictedYield} kg</p>
        </div>
      )}
    </form>
    </div>
    </>
  );
}
