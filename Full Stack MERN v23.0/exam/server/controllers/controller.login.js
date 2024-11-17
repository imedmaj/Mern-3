// the controller does the CRUD for the DB
// import the model here
const { message } = require("statuses")
const logins = require("../models/model.login")
const login = require("../models/model.login")
const { findOne } = require("../models/model.ooredoo")



// FIND LOGIN statues
module.exports.Login = (req, res) => {
    
    login.findOne({ user: req.body.user })
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(req.body.password === user.password) {
                res.json({
                    stat :"Success",
                    type: user.type,
                    user: user.user,
                    _id:user._id,
                    
                    }
                );
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
}

//? READ ALL 
module.exports.findALLRegist = (req, res) => {
    logins.find() //[]
        .then((Alllogins) => {
            console.log(">>> this is ALL My logins ", Alllogins)
            res.json(Alllogins)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

//? READ ONE
module.exports.findOneSinglelogin = (req, res) => {
    logins.findOne({ _id: req.params.id })
        .then(oneSinglelogin => {
            res.json(oneSinglelogin)
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
//? CREATE
module.exports.createNewRegist  = (req, res) => {
//     login.create(req.body)
//     .then(newlyCreatedlogin => {
//         res.json({ login: newlyCreatedlogin })
//     })
//     .catch((err) => {
//         res.status(400).json(err)
//     });
// }



    // Check if a joke with the same setup already exists
        login.findOne({ user: req.body.user })
    .then(existinguser => {
        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "This setup already exists",
                error : "can not be recreated" 
            });
        }

        // If no duplicate, create the new joke
        login.create(req.body)
            .then(newlyCreatedRegist  => {
             //    res.json({ Jokes: newlyCreatedJokes });
             return res.status(200).json({
                stat :"Success",
                 newlyCreatedRegist,
                   
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


module.exports.updateExistingRegist  = (req, res) => {
    logins.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedlogins => {
            res.json({ stat :"Success",
                logins: updatedlogins, })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteAnExistingRegist  = (req,res) => {
    logins.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}


//// all operator API


