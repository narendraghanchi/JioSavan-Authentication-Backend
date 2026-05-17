

const musicModel=require("../models/music.model")
const {uplodeFile}=require("../service/storage.service")

const albumModel =require("../models/album.model")
async function createMusic(req,res)
{
    const title=req.body.title;
    const result= await uplodeFile(req.file.buffer.toString("base64"))

    const music=await musicModel.create({
        url:result.url,
        title:title,
        artiestId:req.user.id
    })
   

    res.status(201).json({
        mesage:"music created succusfully",
        artiestId:req.user.id,
        music
    })
}


async function albumcreate(req,res){
    const {title,music}=req.body;

    const album=await albumModel.create({
        music:music,
        title:title,
        artiestId:req.user.id
    })

      res.status(201).json({
        mesage:"album created succusfully",
       album
    })
}


async function getallmusic(req,res){
    const musics=await musicModel.find().populate("artiest","username email")

    res.status(200).json({
        meaasage :"music fetched succesfully",
        musics
    })
}

async function getallalbum(req,res){
    const album=await albumModel.find().select("title artiest").populate("artiest","username email")

    res.status(200).json({
        meaasage :"album fetched succesfully",
        album
    })
}



async function getAlbumByid(req,res){
    const albumid=req.params.albumid
    const album=await albumModel.find({_id:albumid}).select("title artiest").populate("artiest","username email")

    res.status(200).json({
        meaasage :"album by ID fetched succesfully",
        album
    })
}


module.exports={createMusic,albumcreate,getallmusic,getallalbum,getAlbumByid}