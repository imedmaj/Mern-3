const mongoose=require("mongoose")
//dat base structer


const ooredooSchema = new mongoose.Schema({
    operator: {
        type: String,
        required: [true, "{PATH} is requires"], 
        default: "ooredoo", 
        
    },
    offre: {
        type: String,
        required: [true, "{PATH} is requires"],  
        unique:true  ,  
          
        
    },

}, { timestamps: true })
const ooredoo = mongoose.model("ooredoo",ooredooSchema)
module.exports = ooredoo