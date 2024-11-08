const express = require('express')
const app = express();
const cors = require('cors');  //* cors => 


require('dotenv').config();
require('./config/mongoose.config')

const port = process.env.PORT

//* MiddleWares
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));


//* Routes

const ProductRoutes = require('./routes/route.product');
ProductRoutes(app);


//* Running server application
app.listen(port, () => console.log(`Listening on port: ${port}`));

