

import React, { useState, useEffect } from "react";

const CropGuide = () => {
  const [crop, setCrop] = useState("");
  const [startDate, setStartDate] = useState("");
  const [data, setData] = useState(null);

useEffect(() => {
  const email = localStorage.getItem("email");
  const selectedCrop = localStorage.getItem("selectedCrop");
  const storedStartDate = localStorage.getItem("startDate");
if (!startDate && storedStartDate) setStartDate(storedStartDate);


  if (!email || !selectedCrop) return;

  setCrop(selectedCrop);

  // Load startDate for this crop
  fetch("https://agricultureapp-md0l.onrender.com/farmerdata/load", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, selectedCrop }),
  })
    .then(res => res.json())
    .then(async ({ startDate }) => {
      if (startDate) {
        setStartDate(startDate);

        // ✅ Fetch tasks for the selected crop
        const res = await fetch("https://agricultureapp-md0l.onrender.com/farmer/getSuggestions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            crop: selectedCrop.toLowerCase(),
            startDate,
          }),
        });

        const json = await res.json();
        setData(json);
      }
    });
}, []);






const handleSubmit = async () => {
  const email = localStorage.getItem("email");
  const selectedCrop = localStorage.getItem("selectedCrop");

  if (!email || !selectedCrop || !startDate) {
    alert("Missing info");
    return;
  }

  await fetch("https://agricultureapp-md0l.onrender.com/farmerdata/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, selectedCrop, startDate }),
  });

  const res = await fetch("https://agricultureapp-md0l.onrender.com/farmer/getSuggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ crop: selectedCrop.toLowerCase(), startDate }),
  });

  const json = await res.json();
  setData(json);
  localStorage.setItem("startDate", startDate);

};



//   await fetch("https://agricultureapp-md0l.onrender.com/farmerdata/save", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       email,
//       crop,
//       startDate,
//       taskData: json
//     }),
//   });
// };




  return (
    <div className="page3-container">
      <h2>Crop Growth Guide</h2>

      <p><strong>Selected Crop:</strong> {crop || "Not found in localStorage"}</p>

      <label>Start Date: </label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSubmit}>Get Suggestions</button>

      {data && data.suggestions && (
        <div style={{ marginTop: "20px" }}>
          <h4>Tasks from Day 1 to Day {data.daysPassed} for {data.crop}:</h4>
          <ul>
            {data.suggestions.map((s, idx) => (
              <li key={idx}>
                <strong>Day {s.days[0]}–{s.days[1]}</strong>: {s.task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CropGuide;

