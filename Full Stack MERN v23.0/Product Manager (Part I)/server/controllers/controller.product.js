// the controller does the CRUD for the DB
// import the model here
const { message } = require("statuses")
const Products = require("../models/model.product")
const Product = require("../models/model.product")

//? READ ALL 
module.exports.findALLProducts = (req, res) => {
    Products.find() //[]
        .then((AllProducts) => {
            console.log(">>> this is ALL My Products ", AllProducts)
            res.json(AllProducts)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleProducts = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneSingleProducts => {
            res.json(oneSingleProducts)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewProduct = (req, res) => {
//     Product.create(req.body)
//     .then(newlyCreatedProduct => {
//         res.json({ product: newlyCreatedProduct })
//     })
//     .catch((err) => {
//         res.status(400).json(err)
//     });
// }



    // Check if a joke with the same setup already exists
        Product.findOne({ product: req.body.product })
    .then(existingProduct => {
        if (existingProduct) {
            return res.status(400).json({
             //    success: false,
                message: "This setup already exists",
                error : "can not be recreated" 
            });
        }

        // If no duplicate, create the new joke
        Product.create(req.body)
            .then(newlyCreatedProduct => {
             //    res.json({ Jokes: newlyCreatedJokes });
             return res.status(200).json({
                 success: true,
                 message: "product created ",
                 newlyCreatedProduct
                   
             });

            })
            .catch((err) => {
                res.status(400).json(err);
            });
    })
    .catch(err => {
        res.status(500).json({ message: "Server error", error: err.message });
    });


 // Jokes.findOne({setup:req.body.setup})
 // .then(existingSetup=>{
 //     if(existingSetup){
 //         return  res.status(400).json({
 //             success : false, 
 //             message:"thes setup all ready exist",             
             
 //         })
 //     }
 // })
 // Jokes.create(req.body)
 //     .then(newlyCreatedJokes => {
 //         res.json({ Jokes: newlyCreatedJokes })
 //     })
 //     .catch((err) => {
 //         res.status(400).json(err)
 //     });
// }
}


module.exports.updateExistingProducts = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProducts => {
            res.json({ Products: updatedProducts })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingProducts = (req,res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}