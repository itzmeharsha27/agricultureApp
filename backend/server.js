const express=require('express')
const router=express.Router();
const cors=require('cors')
const ConnectDB=require('./config/db.js')
const { detail } = require('./Data'); // adjust path


const app=express();
app.use(cors())

app.use(express.json())

ConnectDB();

const itemmm=require("./routes/items")
app.use('/api',itemmm)

const regiauth=require("./routes/Register")
app.post('/api/reg',regiauth)

const logauth=require("./routes/login.js")
app.post('/api/log',logauth)


const cropss=require("./index.js")
app.use("/farmer",cropss)


const cropss2=require("./index2.js")
app.use("/",cropss2)

// router.get('/api/items/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const item = detail.find(d => d.id === id);
//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ message: 'Item not found' });
//   }
// });


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`port is runnin on ${PORT}`);
})