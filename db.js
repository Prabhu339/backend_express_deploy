const mongoose=require("mongoose")
//const uri="mongodb://localhost:27017/ekart"
const uri="mongodb+srv://magapuchinni:IC1bvb8B8AiN6LBi@cluster0.fusgiuv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//const dbUrl="mongodb+srv://magapuchinni:sr2j9PpK0hO53VP5@cluster0.5azkm.mongodb.net/express"
mongoose.connect(uri)
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err));

