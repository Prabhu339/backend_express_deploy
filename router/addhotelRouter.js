const express=require("express");
const router=express.Router();
const addhotelModel=require("../model/addhotelModel")

router.post("/", async (req,res)=>{
const addHotel=new addhotelModel(req.body)
const result=await addHotel.save()
res.send(result);
})
router.get("/", async (req,res)=>{
    const result=await addhotelModel.find()
    res.send(result)
})

module.exports=router;