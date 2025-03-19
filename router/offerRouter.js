const express=require("express");
const offerModel = require("../model/offerModel");
const router=express.Router();

router.post("/",async (req,res)=>{
    const offer=new offerModel(req.body)
    const result=await offer.save()
    res.send(result);
})

router.get("/",async (req,res)=>{
    const result=await offerModel.find()
    res.send(result);
})
//read one 
router.get('/:_id',async (req,res)=>{
    const query={_id:req.params._id}
    const result=await offerModel.findOne(query)
    res.send(result)
})

router.put("/:_id", async (req,res)=>{
    const query={_id:req.params._id}
    const result=await offerModel.updateOne(query,{$set:req.body})
    res.send(result);
})

router.delete("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await offerModel.deleteOne(query)
    res.send(result)
})
module.exports=router;