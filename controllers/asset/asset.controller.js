const bankAccount = require("../../models/asset/bankAccount.model")
const business = require ("../../models/asset/business.model")
const insurance = require ("../../models/asset/insurance.model")
const intellectualProperty = require ("../../models/asset/intellectualProperty.model")




exports.getBankDetails = async (req, res) => {
    const user = req.token_data._id
    const users = await BankDataAccess.findBank(user);
    
    return {
      error: false,
      sucess: true,
      message: "Bank Account Found Successfully",
      data: {users}
    };
  
  };