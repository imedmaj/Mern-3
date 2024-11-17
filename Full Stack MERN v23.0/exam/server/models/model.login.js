const mongoose=require("mongoose")
//dat base structer


const loginSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, "{PATH} is requires"],  
        unique:true  ,   
        minLength: [5, "{PATH} must have at least 2 chars"]   
        
    },
    password: {
        type: String,
        required: [true, "{PATH} is requires"],  
       
        minLength: [8, "{PATH} must have at least 2 chars"]   
        
    },
    type: {
        type: String,
        required: [true, "{PATH} is requires"],  
        default: "user", 
        
    },

}, { timestamps: true })
const login = mongoose.model("login",loginSchema)
module.exports = login

