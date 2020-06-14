const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//const env = Object.assign({}, process.env, {PORT: 5000});
const port = process.env.PORT || 3000

require("./Details")



app.use(bodyParser.json())

const Details = mongoose.model("disease")




const mongoUri = "mongodb+srv://krisidoctor:krisidoctor123@cluster0-j9hrr.mongodb.net/plants?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo")
}

)

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.get("/", (req, res) => {
    Details.find({}).then(data => {
        res.send(data)

    }).catch(err => {
        console.log(err)
    })

})

app.post("/searchdetails", (req, res) => {
    name = req.body.name
    Details.find({ name }).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
})