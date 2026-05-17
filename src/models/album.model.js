const mongoose=require("mongoose")

const albumSchema=new mongoose.Schema({
    music:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"music",}
    ],
    title:{
        type:String,
        required:true},

    artiestId:{
          type: mongoose.Schema.Types.ObjectId, 
          ref:"user",
        required:true}
})

const albumModel=mongoose.model("album",albumSchema)

module.exports=albumModel