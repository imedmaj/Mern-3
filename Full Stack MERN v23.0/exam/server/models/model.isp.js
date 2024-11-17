const mongoose=require("mongoose")
//dat base structer


const Schema = new mongoose.Schema({
    operator: {
        type: String,
        required: [true, "{PATH} is requires"],  
        
    },
    offre: {
        type: String,
        required: [true, "{PATH} is requires"],  
          
        
    },

}, { timestamps: true })
const sim = mongoose.model("sim",simSchema)
module.exports = sim

