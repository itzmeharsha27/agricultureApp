const mongoose=require ('mongoose')

const ConnectDB= (async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/jeji',{useNewUrlParser: true,
      useUnifiedTopology: true
  });
        console.log("mongo db connected")

  }catch(err){}
})

module.exports =ConnectDB;