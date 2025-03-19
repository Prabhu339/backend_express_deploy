const mongoose=require("mongoose");
const offerSchema = new mongoose.Schema({
    img:{type:String,
        required:false
        
    },
    region:String,
    city:String,
    offer:String,
    discount:String
})
const offerModel=mongoose.model("offer",offerSchema)
module.exports=offerModel;