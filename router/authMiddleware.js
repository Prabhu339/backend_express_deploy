const jwt=require("jsonwebtoken");

const authMiddle=(req,res,next)=>{
let token=req.header("x-token");
if(!token){
    res.send("auth token not found")
}
let decode=jwt.verify(token,"chinna")
req.users=decode.users;
next();
}

module.exports=authMiddle