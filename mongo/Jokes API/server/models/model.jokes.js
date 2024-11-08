const mongoose=require("mongoose")
//dat base structer


const jokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "{PATH} is requires"],      
    },
    punchline: {
        type: String,
        required: [true, "{PATH} is requires"],  
    },

}, { timestamps: true })
const Jokes = mongoose.model("jokes",jokesSchema)
module.exports = Jokes

