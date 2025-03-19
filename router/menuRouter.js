const express=require("express");
const router=express.Router();
const menuModel=require("../model/menuModel")

router.post("/",async (req,res)=>{
    const menu=new menuModel(req.body)
    const result= await menu.save()
    res.send(result)    
})

router.get("/",async (req,res)=>{
    const result=await menuModel.find()
    res.send(result)
})
router.get("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await menuModel.findOne(query)
    res.send(result)
    })
module.exports=router;