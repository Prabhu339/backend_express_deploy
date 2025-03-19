const mongoose=require("mongoose")
const uri="mongodb://localhost:27017/ekart"
//const dbUrl="mongodb+srv://magapuchinni:sr2j9PpK0hO53VP5@cluster0.5azkm.mongodb.net/express"
mongoose.connect(uri)
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err));

