


const express=require("express")
const authroutes=require("../src/routes/auth.routes")
const musicroutes=require("../src/routes/music.routes")
const cookieparser=require("cookie-parser")


const app=express()

app.use(express.json())

app.use(cookieparser())

app.use("/api/auth",authroutes)
app.use("/api/music",musicroutes)



module.exports=app