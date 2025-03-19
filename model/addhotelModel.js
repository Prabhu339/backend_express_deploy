const mongoose=require('mongoose');
const addhotelSchema=new mongoose.Schema({
    
    image :String,
  
    
    distance:String,
    Name:String
})
const addmenu=mongoose.model("addhotel",addhotelSchema);
module.exports=addmenu;