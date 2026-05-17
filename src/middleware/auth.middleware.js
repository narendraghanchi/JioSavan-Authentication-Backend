const jwt=require("jsonwebtoken")

async function authartiest(req,res,next)
{
    try{
   const token=req.cookie.token("token")

    if(!token){
        return res.status(401).json({
            message:"Please Register Or Login"
        })
    }

    const decoded=jwt.verify(token,process.env.JWt_SECRET_KEY)

    if(decoded.role!=="artiest"){
         return res.status(403).json({
            message:"You are ynable to create music"
        })
    }
    req.user=decoded

    next()
}
   catch(err){
          console.log("arties middleware error:",err)
   }
}

   












   

  
async function authuser(req,res,next)
{
     try{
    const token=req.cookie.token("token")

    if(!token){
        return res.status(401).json({
            message:"Please Register Or Login"
        })
    }

    const decoded=jwt.verify(token,process.env.JWt_SECRET_KEY)

    if(decoded.role!=="user"){
         return res.status(403).json({
            message:"You are ynable to create music"
        })
    }
    req.user=decoded

    next()

}    catch(err){
          console.log("arties middleware error:",err)
   }
}

   

   module.exports={authartiest,authuser}