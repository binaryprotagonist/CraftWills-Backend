
require("dotenv").config();
require("./mongo");
const express = require("express");
const userRouters = require("./routes/user.route");
const bankRouters = require ("./routes/asset/bank.route")
const memberPersonRouters = require ("./routes/member.person.route")
const memberOrganisationRouters = require ("./routes/member.organisation.route")
const insurancePolicyRouters = require("./routes/asset/insurance.policy.route")
const investmentAccountRouters = require("./routes/asset/investment.route")
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
app.use("/",memberOrganisationRouters)
app.use("/",insurancePolicyRouters)
app.use("/",investmentAccountRouters)

app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});

/////////////////////
