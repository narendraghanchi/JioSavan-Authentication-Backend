const express=require("express")
const musicController=require("../controller/music.controller")

const authmiddleware=require("../middleware/auth.middleware")

const multer=require("multer")
const router=express.Router()

const uplode=multer({storage:multer.memoryStorage()})


router.post("/createMusic",uplode.single("music"),authmiddleware.authartiest,musicController.createMusic)
router.post("/createalbum",authmiddleware.authartiest,musicController.albumcreate)



router.get("/getallmusic",authmiddleware.authuser,musicController.getallmusic)
router.get("/getallalbum",authmiddleware.authuser,musicController.getallalbum)
router.get("/getalbum/:albumid",authmiddleware.authuser,musicController.getAlbumByid)





module.exports=router