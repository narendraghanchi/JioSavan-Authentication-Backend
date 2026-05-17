const mongoose=require("mongoose")

const musicSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    title:String,
    artiestId:{type: mongoose.Schema.Types.ObjectId,
     ref: "user"}
})

const musicModel=mongoose.model("music",musicSchema)

module.exports=musicModel