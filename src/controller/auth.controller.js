
const userModel=require("../models/user.model")
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs")
async function registerUser(req,res){

    const{username,email,password,role="user"}=req.body;

    if(!username &&!email)
    {
        return res.status(401).json({
            message:"Inavalide Cradiance"
        })
    }

const hashpass= await bcrypt.hash(password,10)



   const user= await userModel.create({
    username,
    email,
    password:hashpass,
    role:role

   })

 const token=jwt.sign({
    id:user._id
 }  ,process.env.JWt_SECRET_KEY)


 res.cookie("token",token)

 res.status(201).json({
    message:"User Register Succuesfully",
    user
 })


}


async function loginUser(req,res){
 
    const {username,email,password}=req.body;

     const userAlreadyExixts= await userModel.findOne({
        $or:[{
            email
        } ,{username}]
     })

       if(!userAlreadyExixts){
        return res.status(403).json({
            message:"Please Enter Correct Creaditions"
        })
       }
   
       const decoded=await bcrypt.compare(password,userAlreadyExixts.password)

       
     if(!decoded){
           return res.status(403).json({
            message:"Please Enter valid password"
        })
     }
      

    const token=jwt.sign({
        id:userAlreadyExixts._id
    },process.env.JWt_SECRET_KEY)


    res.cookie("token",token)

    res.status(201).json({
        message:"Loggin Succussfully",

    })
}


const logout =async(req,res)=>{
    res.clearCookie("token")

    res.status(201).json({
        message:"logout sucuesfully"
    })
}

module.exports={registerUser,loginUser,logout
    }