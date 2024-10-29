const express = require('express')
// import express from "express"
// console.log(express)
const app = express()

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/users.routes")(app)
require("./routes/company.routes")(app)
require("./routes/all.js")(app)

//! To start a server at the VERY BOTTOM of the file 
app.listen(5000, () => {
    console.log(`>>>> Server is up and running on Port 5000 and it is listening for REQuest and RESponce`)
})