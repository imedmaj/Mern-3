const mongoose=require("mongoose")
//dat base structer


const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "{PATH} is requires"],  
        unique:true  ,   
        minLength: [3, "{PATH} must have at least 2 chars"]   
        
    },
    Number: {
        type: Number,
        required: [true, "{PATH} is requires"], 
              
    },
    Open: {
        type: Boolean,
        default: false 
              
    },

}, { timestamps: true })
const Store = mongoose.model("product",productSchema)
module.exports = Store

