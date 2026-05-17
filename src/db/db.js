const mongoose=require("mongoose")

const connectDB= async()=>{
    try{
   await mongoose.connect(process.env.MONGO_URI)  
    console.log("Connect To DB succcusfully")

    }
    catch(err){
        console.log("Error to connect With DB",err)
    }
}

module.exports=connectDB