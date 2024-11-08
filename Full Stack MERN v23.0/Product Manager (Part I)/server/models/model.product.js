const mongoose=require("mongoose")
//dat base structer


const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: [true, "{PATH} is requires"],      
     
    },
    price: {
        type: Number,
        required: [true, "{PATH} is requires"],  
    },
    description: {
        type: String,
        required: [true, "{PATH} is requires"],      
       
    },

}, { timestamps: true })
const Product = mongoose.model("product",productSchema)
module.exports = Product

