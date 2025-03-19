const express=require("express")
const router=express.Router();

const signModel=require("../model/userModel")

router.post("/",async (req,res)=>{  
    const {email,password}=req.body;
    const exists=await users.findOne({email:email})
    if(!exists){
        res.send({message:"user not found",status:false})
        console.log("data not found");
        
    }
    else if(exists.password!==password){
        res.send({message:"password does not match",status:false})

    }
    else{
        let payload={
           users:{
            id:exists.id
           }
        }
     const token=jwt.sign(payload,"chinna",{expiresIn:"10m"   })
        res.json({token})
        
       
    }
})

module.exports=router;