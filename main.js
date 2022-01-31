require("dotenv").config();
require("./mongo");
const express = require("express");
// User

const userRouters = require("./routes/user.route");
const memberRouter = require ("./routes/members/members.route")
// Assets

const assetsRouter = require ("./routes/asset/assets")

// Liabilities

const liabilitiesRouter = require ("./routes/liabilities/liabilities.route")

// const getLiabilities = require ("./routes/liabilities/getLiabilities")

// Trust

const trustRouter = require ("./routes/trust/trust.route")

// Will
const willRouter = require("./routes/Will/will.route")

// App

const app = express();

// Cors

const cors = require('cors')

//path

const path = require ('path')

const PORT = process.env.PORT || 3000;
// Body Parser


const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join("uploads", '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Users
app.use("/users", userRouters);

//members

app.use ("/",memberRouter)

// Assets

app.use("/",assetsRouter)

// Liabilities 

app.use("/",liabilitiesRouter)

// app.use("/",getLiabilities)

// Trust

app.use("/trust",trustRouter)

//Will

app.use('/will',willRouter)

app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});

/////////////////////
