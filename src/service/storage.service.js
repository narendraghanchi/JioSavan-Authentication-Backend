const Imagekit = require("imagekit")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

const uplodeFile = async (file) => {
    const result = await imagekit.upload({
        file,
        fileName: "music_" + Date.now()
    })
    return result
}

module.exports = { uplodeFile }