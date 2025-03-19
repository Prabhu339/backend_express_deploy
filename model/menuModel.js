const mongoose=require("mongoose");
const menuSchema=new mongoose.Schema({
    itemname:String,
    price:String,
    details:String,
    image:String
})
const menuModel=mongoose.model("menu",menuSchema);
module.exports=menuModel;