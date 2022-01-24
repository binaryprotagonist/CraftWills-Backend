const privateDept = require("../../models/liabilities/privateDept.model");
const securedLoan = require ("../../models/liabilities/securedLoan.models");
const unSecuredLoan = require ("../../models/liabilities/unsecuredLoan.model")

exports.Liabilities = async (req, res) => {
    const User = req.token_data._id
    try {
        const privateDeptData = privateDept.find({user_id : User});
        const securedLoanData = securedLoan.find({user_id : User});
        const unSecuredLoanData = unSecuredLoan.find({user_id : User});

        Promise.all([privateDeptData,securedLoanData,unSecuredLoanData]).then((values)=>{
            console.log(values);
            res.send(values);
            })
    }catch(err) {
        console.log(err)
    }
  
}