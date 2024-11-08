const express = require("express");
const app = express();

// const cors = require('cors'); 

require('dotenv').config();
require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }));
const port = process.env.PORT;

const JokesRoutes = require("./server/routes/route.jokes")

JokesRoutes(app)
// const MoviesRoutes = require("./server/routes/route.jokes")
// MoviesRoutes(app)

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));