const express=require ('express')
const router=express.Router()
//  const cors=require'cors'
 const User =require ('../modules/User')

 router.post('/reg',async(req,res)=>{
    try{
        const{name,email,password}=req.body;

        const ext=await User.findOne({email})
        if(ext){
            return res.status(400).Json({message:'already exist'})
        }
        const new_user=new User({
            name,
            email,
            password
        })
        await new_user.save();
        console.log("registed successfully")
    }catch(err){}
 })

 module.exports=router
