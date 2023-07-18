const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://tusharcsemitrc2020:one2255@tush.lmidskd.mongodb.net/training", {

}).then(() => {
    console.log("done")
}).catch((e) => {
    console.log(e)
})