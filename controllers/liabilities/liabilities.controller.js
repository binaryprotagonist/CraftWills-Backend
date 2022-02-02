const liabilities = require ("../../models/liabilities/liabilities.model");
const mongoose = require ("mongoose")
const storeLiabilities = async (req,res) => {
    const _id = req.token_data._id;
    console.log(req.body.securedLoan)
    try{
    const data = new liabilities ({
        user_id : _id,
        privateDept: {
            dept_Name: req.body.privateDept?.dept_Name,
            description: req.body.privateDept?.description,
            current_Outstanding_Amount : req.body.privateDept?.current_Outstanding_Amount,
            lender: req.body.privateDept?.memberId
        },
        securedLoan: req.body?.securedLoan ? {
            loanName: req.body.securedLoan?.loanName,
            loanProvider: req.body.securedLoan?.loanProvider,
            loan_Number: req.body.securedLoan?.loan_Number,
            loan_Id_Number: req.body.securedLoan?.loan_Id_Number,
            description: req.body.securedLoan?.description,
            addAssets: req.body.securedLoan?.assetId,
            current_Outstanding_Amount : req.body.securedLoan?.current_Outstanding_Amount
        } : {},
        unsecuredLoan: {
            loanProvider: req.body.unsecuredLoan?.loanProvider,
            loan_Number: req.body.unsecuredLoan?.loan_Number,
            loan_Id_Number: req.body.unsecuredLoan?.loan_Id_Number,
            description: req.body.unsecuredLoan?.description,
            current_Outstanding_Amount : req.body.unsecuredLoan?.current_Outstanding_Amount
    
        }
    })
    const savedData = await data.save();
    res.json({
        message : "Data has been saved successfully",
        storedData : savedData,
        success : true
    })
    }
    catch (err) {
        res.json({
            message : "Something Went Wrong!",
            error : err.message
        })
    }
}

const getLiabilities = async (req,res) =>{
    const _id = req.token_data._id
    try {
        const data = await liabilities.find({user_id : _id});
        res.json({
            message : "data found successfully",
            success : true,
            data : data
        })
    }
    catch (err) {
        res.json({
            message : "data not found!",
            success : false,
            error : err.message
        })
    }
}
// var db = require('database-js');
const liabilitystats = async (req,res)=>{
    // const pipeline;
    
    const aggCursor = await liabilities.aggregate([
        {
          $match: {
            user_id: req.token_data._id
          }
        }, {
          $group: {
            _id: '$user_id', 
            total: {
              $sum: '$privateDept.current_Outstanding_Amount'
            }
          }
        }
      ]);
      aggCursor.forEach(function (item, index) {
        console.log(item.total)
        res.json(item.total)   
    });
      
}


module.exports = {storeLiabilities , getLiabilities ,liabilitystats}