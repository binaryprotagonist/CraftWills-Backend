
require("dotenv").config();
require("./mongo");
const express = require("express");
const userRouters = require("./routes/user.route");
const bankRouters = require ("./routes/bank.route")
const memberPersonRouters = require ("./routes/member.person.route")
const app = express();
const cors = require('cors')
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
app.use("/users", userRouters);
app.use("/",bankRouters)
app.use("/",memberPersonRouters)
app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});

/////////////////////
