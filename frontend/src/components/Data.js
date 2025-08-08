const detail = [
  {
    id: 1,
    pname: "Tomato",
    season: "Kharif (June-July), Rabi (October-November), Summer (January-February)",
    discription: "Tomato is a popular vegetable crop grown for its edible fruits.",
    steps: [
      "Select good quality seeds",
      "Prepare nursery and sow seeds",
      "Transplant healthy seedlings",
      "Prepare the main field",
      "Apply fertilizers",
      "Irrigate regularly",
      "Provide staking/support",
      "Control pests and diseases",
      "Monitor flowering and fruit setting",
      "Harvest at proper maturity"
    ],
    imageUrl: "/tomato.jpg",
    fertilizerImg: "/t-f.jpg",
    fertilizer: [
      "  1) Farm Yard Manure(FYM) ",
      " 2)  NPK 12:61:00",
      " 3)  Urea",
      " 4)  Calcium Nitrate",
      " 5)  Micronutrient Mix"
    ],
    fertilizerImages: [
      "/t-f1.jpg",
      "/f-2.jpg",
      "/t-f3.jpg",
      "/t-f4.jpg",
      "/t-f5.jpg"
    ],
    feramount:[
      "300",
      "400",
      "250",
      "350",
      "450"
    ]
  },
  {
    id: 2,
    pname: "Cotton",
    season: "Kharif (June - July)",
    discription: "Cotton is a fiber crop requiring warm climate and moderate rainfall.",
    steps: [
      "Select disease-free seeds",
      "Prepare field with deep ploughing",
      "Sow seeds with proper spacing",
      "Apply basal dose of fertilizer",
      "Thin out weak seedlings",
      "Irrigate at flowering and boll stages",
      "Spray pesticides to control bollworms",
      "Harvest in multiple pickings"
    ],
    imageUrl: "/cotton.jpg",
    fertilizerImg: "/c-f.jpg",
    fertilizer: [
      "FYM",
      "DAP",
      "Urea",
      "Potash (MOP)",
      "Micronutrient Spray"
    ],
    fertilizerImages: [
      "./c-f1.jpg",
      "./c-f2.jpg",
      "./c-f3.jpg",
      "./c-f4.jpg",
      "./c-f5.jpg"
    ]
  },
  {
    id: 3,
    pname: "Paddy",
    season: "Kharif (June - July), Rabi in some southern states (October - November)",
    discription: "Paddy (rice) is a staple food crop grown in flooded fields.",
    steps: [
      "Prepare nursery beds",
      "Transplant 20-day-old seedlings",
      "Maintain water level in field",
      "Apply nitrogen and potash",
      "Weed management using conoweeder",
      "Pest and disease monitoring",
      "Drain field before harvest",
      "Harvest when grains are golden"
    ],
    imageUrl: "/paddy.jpg",
    fertilizerImg: "/p-f.jpg",
    fertilizer: [
      "FYM",
      "Urea",
      "DAP",
      "Zinc Sulphate",
      "Green Manure"
    ],
    fertilizerImages: [
      "./p-f1.jpg",
      "./p-f2.jpg",
      "./p-f3.jpg",
      "./p-f4.jpg",
      "./p-f5.jpg"
    ]
  },
  {
    id: 4,
    pname: "Wheat",
    season: "Rabi (October - November)",
    discription: "Wheat is a major cereal crop grown during the rabi season.",
    steps: [
      "Select certified wheat seeds",
      "Prepare land with proper tillage",
      "Sow seeds with correct spacing and depth",
      "Apply basal dose of fertilizers",
      "Irrigate at critical stages",
      "Perform timely weeding",
      "Apply top-dress fertilizers",
      "Protect crop from pests and diseases",
      "Stop irrigation before harvest",
      "Harvest when grains are fully mature"
    ],
    imageUrl: "/wheat.jpg",
    fertilizerImg: "/w-f.jpg",
    fertilizer: [
      "FYM",
      "Urea",
      "DAP",
      "Sulphur",
      "Micronutrient Spray"
    ],
    fertilizerImages: [
      "./w-f1.jpg",
      "./w-f2.jpg",
      "./w-f3.jpg",
      "./w-f4.jpg",
      "./w-f5.jpg"
    ]
  },
  {
    id: 5,
    pname: "Jowar",
    season: "Kharif (June - July) and Rabi (September - October)",
    discription: "Jowar (sorghum) is a drought-resistant crop grown in semi-arid regions.",
    steps: [
      "Select hybrid or improved seeds",
      "Plough field and ensure fine tilth",
      "Sow seeds 3-4 cm deep",
      "Apply organic manure and urea",
      "Weed at 15 and 30 days",
      "Watch for stem borer and shoot fly",
      "Irrigate only during dry spells",
      "Harvest when grains harden"
    ],
    imageUrl: "/jowar.jpg",
    fertilizerImg: "/j-f.jpg",
    fertilizer: [
      "FYM",
      "Nitrogen (Urea)",
      "Phosphorus (SSP)",
      "Potassium",
      "Biofertilizer (Azospirillum)"
    ],
    fertilizerImages: [
      "./j-f1.jpg",
      "./j-f2.jpg",
      "./j-f3.jpg",
      "./j-f4.jpg",
      "./j-f5.jpg"
    ]
  },
  {
    id: 6,
    pname: "Chilli",
    season: "Kharif (June - July), Rabi (October - November), Summer (February)",
    discription: "Chilli is a spicy vegetable crop grown for its pungent fruits.",
    steps: [
      "Prepare nursery for 30-day seedlings",
      "Transplant during cloudy weather",
      "Use FYM and basal fertilizers",
      "Irrigate at flowering and fruiting",
      "Remove weeds periodically",
      "Spray fungicide to prevent leaf curl",
      "Harvest at red maturity stage"
    ],
    imageUrl: "/chilly2.jpg",
    fertilizerImg: "/ch-f.jpg",
    fertilizer: [
      "FYM",
      "NPK (19:19:19)",
      "Urea",
      "Potassium Nitrate",
      "Micronutrient Mix"
    ],
    fertilizerImages: [
      "./ch-f1.jpg",
      "./ch-f2.jpg",
      "./ch-f3.jpg",
      "./ch-f4.jpg",
      "./ch-f5.jpg"
    ]
  },
  {
    id: 7,
    pname: "Sugarcane",
    season: "Spring (February - March), Autumn (September - October)",
    discription: "Sugarcane is a long-duration cash crop grown in tropical regions.",
    steps: [
      "Select healthy sugarcane setts",
      "Prepare furrowed field",
      "Plant setts in rows and cover with soil",
      "Irrigate regularly during early stages",
      "Apply nitrogen, phosphorus, and potash",
      "Earth up and weed frequently",
      "Control borers and white grubs",
      "Apply ratoon management",
      "Harvest when canes mature and brix level is high"
    ],
    imageUrl: "/sugar.jpg",
    fertilizerImg: "/s-f.jpg",
    fertilizer: [
      "FYM",
      "Urea",
      "Phosphate (DAP)",
      "Potash (MOP)",
      "Micronutrient Spray"
    ],
    fertilizerImages: [
      "./s-f1.jpg",
      "./s-f2.jpg",
      "./s-f3.jpg",
      "./s-f4.jpg",
      "./s-f5.jpg"
    ]
  }
];

module.exports = { detail };
