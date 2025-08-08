
/*
Folder: frontend/src/components
File: Page3.js
*/

import React, { useState, useEffect } from "react";

const CropGuide = () => {
  const [crop, setCrop] = useState("");
  const [startDate, setStartDate] = useState("");
  const [data, setData] = useState(null);

useEffect(() => {
  const email = localStorage.getItem("email");
  const selectedCrop = localStorage.getItem("selectedCrop");

  if (!email || !selectedCrop) return;

  setCrop(selectedCrop);

  // Load startDate for this crop
  fetch("http://localhost:5000/farmerdata/load", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, selectedCrop }),
  })
    .then(res => res.json())
    .then(async ({ startDate }) => {
      if (startDate) {
        setStartDate(startDate);

        // ✅ Fetch tasks for the selected crop
        const res = await fetch("http://localhost:5000/farmer/getSuggestions", {
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

  await fetch("http://localhost:5000/farmerdata/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, selectedCrop, startDate }),
  });

  const res = await fetch("http://localhost:5000/farmer/getSuggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ crop: selectedCrop.toLowerCase(), startDate }),
  });

  const json = await res.json();
  setData(json);
};



//   await fetch("http://localhost:5000/farmerdata/save", {
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









// // CropGuide.js (Page3)
// import React, { useState,useEffect } from "react";
// const CropGuide = () => {
//   const [crop, setCrop] = useState("wheat");
//   const [startDate, setStartDate] = useState("");
//   const [data, setData] = useState(null);


//   // 🟡 Load saved crop, date, and task data from localStorage
//  useEffect(() => {
//   const email = localStorage.getItem("email");
//   const savedTask = localStorage.getItem("taskData"); // ✅ for task

//   if (!email) return;

//   fetch("http://localhost:5000/farmerdata/load", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email }),
//   })
//     .then(res => res.json())
//     .then(({ selectedCrop, startDate }) => {
//       if (selectedCrop) setCrop(selectedCrop);
//       if (startDate) setStartDate(startDate);

//       if (savedTask) {
//         setData(JSON.parse(savedTask)); // ✅ load saved task
//       }
//     });
// }, []);




// const handleSubmit = async () => {
//   const email = localStorage.getItem("email");

//   if (!email || !crop || !startDate) {
//     alert("Missing info");
//     return;
//   }

//   // Save crop and date in DB
//   await fetch("http://localhost:5000/farmerdata/save", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, selectedCrop: crop, startDate }),
//   });

//   // Fetch suggestions
//   const res = await fetch("http://localhost:5000/farmer/getSuggestions", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ crop: crop.toLowerCase(), startDate }),
//   });

//   const json = await res.json();
//   setData(json);

//   // ✅ Save to localStorage
//   localStorage.setItem("taskData", JSON.stringify(json));
// };





//   return (
// <>
    
//     <div className="page3-container">
//       <h2>Crop Growth Guide</h2>

//       {/* <label>Select Crop: </label>
//       <select value={crop} onChange={(e) => setCrop(e.target.value)}>
//         <option value="wheat">Wheat</option>
//         <option value="rice">Rice</option>
//         <option value="tomato">Tomato</option>
//         <option value="cotton">Cotton</option>
//         <option value="chilli">Chilli</option>
//          <option value="potato">potato</option>
//       </select> */}

//       <br /><br />

//       <label>Start Date: </label>
//       <input
//         type="date"
//         value={startDate}
//         onChange={(e) => setStartDate(e.target.value)}
//       />

//       <br /><br />
//       <button onClick={handleSubmit}>Get Suggestions</button>

       

//       {data && (
//         <div style={{ marginTop: "20px" }}>
//            {/* <h4>Selected Crop: {crop}</h4>
//           <h4>Start Date: {startDate}</h4> */}

//      {data.suggestions && data.suggestions.length > 0 ? (
//   <div className="task-list">
//     <h4>Tasks from Day 1 to Day {data.daysPassed} for {data.crop}:</h4>
//     <ul>
//       {data.suggestions.map((s, idx) => (
//         <li key={idx}>
//           <strong>Day {s.days[0]}–{s.days[1]}</strong>: {s.task}
//         </li>
//       ))}
//     </ul>
//   </div>
// ) : (
//   <p>No tasks available yet. Try changing the start date.</p>
// )}


//         </div>
//       )}
//     </div>
//   </>  
//   );
// };

// export default CropGuide;


  // const handleSubmit = async () => {
  //   if (!crop || !startDate) {
  //     alert("Missing crop or start date");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("http://localhost:5000/farmer/getSuggestions", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ crop, startDate }),
  //     });

  //     const json = await res.json();
  //     setData(json);

  //     localStorage.setItem("startDate", startDate);
  //     localStorage.setItem("cropTaskData", JSON.stringify(json));
  //   } catch (err) {
  //     console.error("Suggestion error:", err);
  //   }
  // };