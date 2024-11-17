// the controller does the CRUD for the DB
// import the model here
const { message } = require("statuses")
const stores = require("../models/model.store")
const store = require("../models/model.store")

//? READ ALL 
module.exports.findALLStores = (req, res) => {
    stores.find() //[]
        .then((Allstores) => {
            console.log(">>> this is ALL My stores ", Allstores)
            res.json(Allstores)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleStores = (req, res) => {
    stores.findOne({ _id: req.params.id })
        .then(oneSinglestores => {
            res.json(oneSinglestores)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewStore = (req, res) => {
//     store.create(req.body)
//     .then(newlyCreatedstore => {
//         res.json({ store: newlyCreatedstore })
//     })
//     .catch((err) => {
//         res.status(400).json(err)
//     });
// }



    // Check if a joke with the same setup already exists
        store.findOne({ store: req.body.Name })
    .then(existingstore => {
        if (existingstore) {
            return res.status(400).json({
                success: false,
                message: "This setup already exists",
                error : "can not be recreated" 
            });
        }

        // If no duplicate, create the new joke
        store.create(req.body)
            .then(newlyCreatedstore => {
             //    res.json({ Jokes: newlyCreatedJokes });
             return res.status(200).json({
             
                 newlyCreatedstore
                   
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


module.exports.updateExistingStores = (req, res) => {
    stores.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedstores => {
            res.json({ stores: updatedstores })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingStores = (req,res) => {
    stores.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}