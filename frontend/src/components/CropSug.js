import React, { useState } from 'react';

const AgriRecommendation = () => {
  const [soil, setSoil] = useState('');
  const [env, setEnv] = useState('');
  const [water, setWater] = useState('');
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  return (
    <>
    <div className="recommendation-container">
      <h2 className="text-xl font-bold mb-4">Select Your Farming Conditions</h2>

      <form className="recommendation-form" onSubmit={handleSubmit} >
        <div>
          <label>Soil Type:</label>
          <select
            className="w-full border p-2 rounded"
            value={soil}
            onChange={(e) => setSoil(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="black">Black Soil</option>
            <option value="red">Red Soil</option>
            <option value="alluvial">Alluvial Soil</option>
          </select>
        </div>

        <div>
          <label>Environment:</label>
          <select
            className="w-full border p-2 rounded"
            value={env}
            onChange={(e) => setEnv(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="dry">Dry</option>
            <option value="humid">Humid</option>
            <option value="moderate">Moderate</option>
          </select>
        </div>

        <div>
          <label>Water Level:</label>
          <select
            className="w-full border p-2 rounded"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Show Recommendations
        </button>
      </form>
 
      {showData && (
        <div className="recommendation-result">
          <h3 className="text-lg font-semibold mb-2">Recommendations:</h3>

          {/* Combo Matches */}
          {soil === 'black' && env === 'dry' && water === 'low' && (
            <p>🌾 Try Cotton, Sorghum, and Bajra</p>
          )}
          {soil === 'alluvial' && env === 'humid' && water === 'high' && (
            <p>🌾 Grow Rice, Sugarcane, and Jute</p>
          )}
          {soil === 'red' && env === 'moderate' && water === 'medium' && (
            <p>🌾 Recommended: Groundnut, Potato, and Maize</p>
          )}
          {(soil && env && water) &&
            !(soil === 'black' && env === 'dry' && water === 'low') &&
            !(soil === 'alluvial' && env === 'humid' && water === 'high') &&
            !(soil === 'red' && env === 'moderate' && water === 'medium') && (
              <p>🌿 Try mixed cropping with pulses and oilseeds.</p>
          )}

          {/* Individual Suggestions */}
          {soil === 'black' && <p>🌿 Suitable: Cotton, Soybean, Sorghum</p>}
          {soil === 'red' && <p>🌿 Suitable: Groundnut, Millet, Potato</p>}
          {soil === 'alluvial' && <p>🌿 Suitable: Rice, Wheat, Sugarcane</p>}

          {env === 'humid' && <p>☁️ Advice: Good for paddy and sugarcane</p>}
          {env === 'dry' && <p>☀️ Advice: Use drought-resistant crops</p>}
          {env === 'moderate' && <p>🌤️ Grow wide range of seasonal crops</p>}

          {water === 'low' && <p>💧 Use drip irrigation</p>}
          {water === 'medium' && <p>💧 Balanced watering is good</p>}
          {water === 'high' && <p>💧 Avoid water-logging; suitable for paddy</p>}
        </div>
      )}
    </div>
    </>
  );
};

export default AgriRecommendation;