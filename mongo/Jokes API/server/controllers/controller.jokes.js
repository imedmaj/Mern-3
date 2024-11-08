// the controller does the CRUD for the DB
// import the model here
const { message } = require("statuses")
const Jokes = require("../models/model.jokes")

//? READ ALL 
module.exports.findALLJokess = (req, res) => {
    Jokes.find() //[]
        .then((AllJokess) => {
            console.log(">>> this is ALL My Jokess ", AllJokess)
            res.json(AllJokess)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSingleJokes = (req, res) => {
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => {
            res.json(oneSingleJokes)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewJokes = (req, res) => {
       // Check if a joke with the same setup already exists
       Jokes.findOne({ setup: req.body.setup })
       .then(existingSetup => {
           if (existingSetup) {
               return res.status(400).json({
                //    success: false,
                   message: "This setup already exists",
                   error : "can not be recreated" 
               });
           }

           // If no duplicate, create the new joke
           Jokes.create(req.body)
               .then(newlyCreatedJokes => {
                //    res.json({ Jokes: newlyCreatedJokes });
                return res.status(200).json({
                    success: true,
                    message: "jokes created ",
                      
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
}

module.exports.updateExistingJokes = (req, res) => {
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => {
            res.json({ Jokes: updatedJokes })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingJokes = (req,res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}