require("dotenv").config();
require("./mongo");
const express = require("express");
// User

const userRouters = require("./routes/user.route");

// Assets

const bankRouters = require ("./routes/asset/bank.route")
const memberPersonRouters = require ("./routes/members/member.person.route")
const memberOrganisationRouters = require ("./routes/members/member.organisation.route")
const insurancePolicyRouters = require("./routes/asset/insurance.policy.route")
const investmentAccountRouters = require("./routes/asset/investment.route")
const BusinessAssetRouters = require("./routes/asset/business.route")
const RealEstateAssetRouters = require ("./routes/asset/realEstate.route")
const MotorVehicleAssetRouters = require("./routes/asset/motorVehicle.route")
const IntellectualPropertyRouters = require("./routes/asset/intellectualProperty.route")
const SafeDepositRouters = require("./routes/asset/safeDeposit.route")
const PersonalPossessionRouters = require("./routes/asset/personalPossession.route")
const OtherAssetsRouters = require("./routes/asset/otherAssets.route")

// Liabilities

const securedLoanRouters = require ("./routes/liabilities/securedLoan.route")
const unSecuredLoanRouters = require ("./routes/liabilities/unSecuredLoan.route")
const privateDeptRouters = require("./routes/liabilities/privateDept.route")

// Trust

const trustRouter = require ("./routes/trust/trust.route")

// App

const app = express();

// Cors

const cors = require('cors')

//path

const path = require ('path')

const PORT = process.env.PORT || 3000;
// Body Parser


const bodyParser = require('body-parser');
const MotorVehicle = require("./models/asset/motorVehicle.model");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join("uploads", '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Users
app.use("/users", userRouters);

// Assets

app.use("/",bankRouters)
app.use("/",memberPersonRouters)
app.use("/",memberOrganisationRouters)
app.use("/",insurancePolicyRouters)
app.use("/",investmentAccountRouters)
app.use("/",BusinessAssetRouters)
app.use("/",RealEstateAssetRouters)
app.use("/",MotorVehicleAssetRouters)
app.use("/",IntellectualPropertyRouters)
app.use("/",SafeDepositRouters)
app.use("/",PersonalPossessionRouters)
app.use("/",OtherAssetsRouters)

// Liabilities 

app.use("/liabilities",securedLoanRouters)
app.use("/liabilities",unSecuredLoanRouters)
app.use("/liabilities",privateDeptRouters)

// Trust

app.use("/trust",trustRouter)


app.listen(PORT, () => {
  console.log(`YOUR SERVER IS WORKING AT PORT ${PORT}`);
});

/////////////////////
