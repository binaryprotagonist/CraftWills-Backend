const bankAccount = require("../../models/asset/bankAccount.model");
const business = require ("../../models/asset/business.model");
const insurance = require ("../../models/asset/insurance.model");
const intellectualProperty = require ("../../models/asset/intellectualProperty.model");
const investment = require ("../../models/asset/investment.model");
const motorVehicle = require ("../../models/asset/motorVehicle.model");
const otherAssets = require ("../../models/asset/otherAssets.model");
const personalPossession = require ("../../models/asset/personalPossession.model");
const realEstate = require ("../../models/asset/realEstate.model");
const safeDepositBox = require ("../../models/asset/safeDepositBox.model")



exports.getAssetDetails = async (req, res) => {
    const User = req.token_data._id
    try {
        const bankData = bankAccount.find({user_id : User});
        const businessData = business.find({user_id : User});
        const insuranceData = insurance.find({user_id : User});
        const intellectualPropertyData = intellectualProperty.find({user_id : User});
        const investmentData = investment.find({user_id : User});
        const motorVehicleData = motorVehicle.find({user_id : User});
        const otherAssetsData = otherAssets.find({user_id : User});
        const personalPossessionData = personalPossession.find({user_id : User});
        const realEstateData = realEstate.find({user_id : User});
        const safeDepostdata = safeDepositBox.find({user_id : User});

        Promise.all([bankData,businessData,insuranceData,intellectualPropertyData,investmentData,motorVehicleData,otherAssetsData,personalPossessionData,
        realEstateData,safeDepostdata]).then((values)=>{
            console.log(values);
            })
    }catch(err) {
        console.log(err)
    }
  
}