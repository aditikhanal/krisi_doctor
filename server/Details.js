const mongoose = require("mongoose")

const DiseaseSchema = new mongoose.Schema(
    {
        name: String,
        about: String,
        treatment: String


    }
)

mongoose.model("disease", DiseaseSchema)