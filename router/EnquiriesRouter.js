const express=require("express")
const EnquiryModel=require("../model/EnquiriesModel")
const router=express.Router()

router.post("/",async(req,res)=>{
    const enquiry=new EnquiryModel(req.body)
    const result=await enquiry.save()
    res.send(result)
})

router.get("/",async (req,res)=>{
    const result=await EnquiryModel.find()
    res.send(result)
})

router.get("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await EnquiryModel.findOne(query)
    res.send(result)
})

router.delete("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await EnquiryModel.deleteOne(query)
    res.send(result)
})

router.put("/:_id",async (req,res)=>{
    const query={_id:req.params._id}
    const result=await EnquiryModel.updateOne(query)
    res.send(result)
})



module.exports=router;

