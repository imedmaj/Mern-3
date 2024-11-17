const mongoose=require("mongoose")
//dat base structer


const orangeSchema = new mongoose.Schema({
    operator: {
        type: String,
        required: [true, "{PATH} is requires"], 
        default: "orange", 
        
    },
    offre: {
        type: String,
        required: [true, "{PATH} is requires"],  
        unique:true  ,  
          
        
    },

}, { timestamps: true })
const orange = mongoose.model("orange",simSchema)
module.exports = orange