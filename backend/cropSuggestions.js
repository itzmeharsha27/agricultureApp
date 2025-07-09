// [5:07 pm, 9/7/2025] Harsha: 7,9 , 11,12,
// [5:07 pm, 9/7/2025] Harsha: // server/data/cropSuggestions.js
module.exports = {
  wheat: {
    duration: 120,
    suggestions: [
      { days: [1, 3], task: "Prepare soil and initial watering" },
      { days: [4, 6], task: "Sow seeds and ensure moisture" },
      { days: [7, 10], task: "First fertilizer application" },
      { days: [11, 20], task: "Weed removal and pest check" }
    ]
  },
  rice: {
    duration: 150,
    suggestions: [
      { days: [1, 3], task: "Flood field and transplant seedlings" },
      { days: [4, 6], task: "Maintain water levels" },
      { days: [7, 10], task: "Apply nitrogen fertilizer" },
      { days: [11, 20], task: "Weed control and insect monitoring" }
    ]
  }
};