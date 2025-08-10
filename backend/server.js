// require('dotenv').config(); // ✅ Load environment variables at the top
// console.log("SECRET_KEY from env:", process.env.SECRET_KEY || "❌ Not Found");



// const express=require('express')
// const router=express.Router();

// const ConnectDB=require('./config/db.js')
// const { detail } = require('./Data'); // adjust path


// const app=express();

// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));

// app.use(cors({
//   origin: ["https://your-vercel-app-url.vercel.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));


// app.use(express.json())

// ConnectDB();

// const itemRoutes = require('./routes/items');
// app.use('/api', itemRoutes); // VERY IMPORTANT

// // app.use(express.static("public")); // to serve images like /tomato.jpg

// // app.get("/api/items", (req, res) => {
// //   res.json(detail);
// // });

// const registerRoute = require('./routes/Register');
// app.use('/api', registerRoute);



// const loginRoute = require('./routes/login');
// app.use('/api', loginRoute); // ✅ use app.use (not app.post)



// const cropss=require("./index.js")
// app.use("/farmer",cropss)


// const cropss2=require("./index2.js")
// app.use("/",cropss2)


// const logoutRoute = require('./routes/logout');
// app.use('/api', logoutRoute);

// const authenticate = require('./middleware/auth');
// app.get('/api/protected', authenticate, (req, res) => {
//   res.json({ message: "This is protected data" });
// });


// const farmerRoute = require('./routes/farmerRoute');
// app.use('/farmerdata', farmerRoute);


// //ML
// const pricePredictRoute = require('./pricePredict');
// app.use('/api', pricePredictRoute);


// const profileRoute = require('./routes/profile');
// app.use('/api', profileRoute);


// // router.get('/api/items/:id', (req, res) => {
// //   const id = parseInt(req.params.id);
// //   const item = detail.find(d => d.id === id);
// //   if (item) {
// //     res.json(item);
// //   } else {
// //     res.status(404).json({ message: 'Item not found' });
// //   }
// // });
// //simple test

// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log(`port is runnin on ${PORT}`);
// })



require('dotenv').config(); // ✅ Load environment variables
console.log("SECRET_KEY from env:", process.env.SECRET_KEY || "❌ Not Found");

const express = require('express');
const cors = require('cors'); // ✅ Missing in your code
const ConnectDB = require('./config/db.js');

const app = express(); // ✅ Create app FIRST

// ✅ CORS setup
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// (Optional) If you want specific frontend origin instead of "*"
// app.use(cors({
//   origin: ["https://your-vercel-app-url.vercel.app"],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

app.use(express.json());

// ✅ Connect DB
ConnectDB();

// Routes
app.use('/api', require('./routes/items'));
app.use('/api', require('./routes/Register'));
app.use('/api', require('./routes/login'));
app.use('/farmer', require("./index.js"));
app.use('/', require("./index2.js"));
app.use('/api', require('./routes/logout'));

const authenticate = require('./middleware/auth');
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: "This is protected data" });
});

app.use('/farmerdata', require('./routes/farmerRoute'));
app.use('/api', require('./pricePredict'));
app.use('/api', require('./routes/profile'));

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`port is runnin on ${PORT}`);
});
