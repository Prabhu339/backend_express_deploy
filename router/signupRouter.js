const express=require("express")
const router=express.Router()
const signModel=require("../model/userModel")

router.post("/",async (req, res)=>{
    const {name,email, password, cpassword}=req.body;
    //check for existing users

    const exist = await users.findOne({email:email});
    if(exist){
        res.send({message:"already exists",status:false})
        
    }
    else if(password!==cpassword){
        
      res.send({message:"password and confirm password does not match",status:false})
    }
    else{   
        const user=new users(req.body);
        const result =await user.save();
        res.send({message :"success",status:true});

    }
})

module.exports=router;