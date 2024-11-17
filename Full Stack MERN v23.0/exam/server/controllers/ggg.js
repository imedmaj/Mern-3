module.exports.findALLoperators = (req, res) => {
    operators.find() //[]
        .then((Alloperators) => {
            console.log(">>> this is ALL My operators ", Alloperators)
            res.json(Alloperators)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleoperators = (req, res) => {
    operators.findOne({ operator: req.params.id })
        .then(oneSingleoperators => {
            res.json(oneSingleoperators)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewoperator = (req, res) => {
    operator.create(req.body)
    .then(newlyCreatedoperator => {
        res.json({ operator: newlyCreatedoperator })
    })
    .catch((err) => {
        res.status(400).json(err)
    });
}



    // // Check if a joke with the same setup already exists
    //     operator.findOne({ operator: req.body.operator })
    // .then(existingoperator => {
    //     if (existingoperator) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "This setup already exists",
    //             error : "can not be recreated" 
    //         });
    //     }

    //     // If no duplicate, create the new joke
    //     operator.create(req.body)
    //         .then(newlyCreatedoperator => {
    //          //    res.json({ Jokes: newlyCreatedJokes });
    //          return res.status(200).json({
             
    //              newlyCreatedoperator
                   
    //          });

    //         })
    //         .catch((err) => {
    //             res.status(400).json(err);
    //         });
    // })
    // .catch(err => {
    //     res.status(500).json({ message: "Server error", error: err.message });
    // });


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
// }


module.exports.updateExistingoperators = (req, res) => {
    operators.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedoperators => {
            res.json({ operators: updatedoperators })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingoperators = (req,res) => {
    operators.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}