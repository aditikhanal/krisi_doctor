const mongoose = require("mongoose")

const DiseaseSchema = new mongoose.Schema(
    {
        name: String,
        about: String,
        treatment: String,
        symptoms:String


    }
)

mongoose.model("disease", DiseaseSchema)