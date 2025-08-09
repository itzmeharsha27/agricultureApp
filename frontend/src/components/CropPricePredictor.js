import React, { useState } from 'react';

export default function CropPricePredictor() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const res = await fetch('https://agricultureapp-md0l.onrender.com/api/predict-price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ current_month: month })
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🌾 Crop Price Prediction (Next 6 Months)</h2>

      <label>Current Month (1–12): </label>
      <input
        type="number"
        min="1"
        max="12"
        value={month}
        onChange={(e) => setMonth((e.target.value))}
      />

      <br /><br />
      <button onClick={handlePredict}>Predict</button>

      {result && (
        <div>
          <h3>📈 Predicted Prices (₹):</h3>
          <ul>
            {Object.entries(result).map(([k, v]) => (
              <li key={k}>{k.replace('_', ' ')}: ₹{v}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}