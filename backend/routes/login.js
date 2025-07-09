const express=require('express')
const router=express.Router()
//  const cors=require'cors'
 const User=require ('../modules/User')

 router.post('/log',async(req,res)=>{
    try{
        const{name,email,password}=req.body;

        const che=await User.findOn({email})
        if(!che){
return res.status(400).json({message:"user not found"})
        }
        if(!User.password==password)
        {
            return res.status(400).json({message:"password din't match "})
        }
        res.status(400).json({message:"loggedin successfully"})
     }catch(error){}
 })

 module.exports=router
