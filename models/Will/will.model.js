const { number } = require("joi");
const mongoose = require("mongoose");
const WillSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    id_Number : {
        type : Number,
        required : true
    },
    id_Type : {
        type : String,
        required : true
    },
    fullName : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    floorNumber : {
        type : String,
        required : true
    },
    unitNumber : {
        type : Number,
        required : true
    },
    streetName : {
        type : String,
        required : true
    },
    postalCode : {
        type : Number,
        required : true
    },
    assetScope :{
        type : String,
        default : "Singapore",
        required : true
    },
    appoint_Primary_Executor :{
        executor_type : {type : String,
        required : true},

        addExecutor : [
            {type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"}
        ]
    },
    appoint_Replacement_Executor : {
        executor_type : {
            type : String,
            required : true
        },
        addExecutor : [
            {type : mongoose.Schema.Types.ObjectId ,
            ref : "Memberdata"}
        ]
    },
    

    appoint_Guardian : {
        guardian_type : {
            type : String,
        },
        executor_type : {
            type : String,
            required : true
        },
        addExecutor : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }]
    },
    appoint_Replacement_Guardian : {
        executor_type : {
            type : String,  
            required : true
        },
        addExecutor : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }]
    },
    liabilities : {
        addSecuredLoanData:  [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "SecuredLoanData"
        }],
        addUnsecuredLoanData : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "unSecuredLoanData"
        }],
        addPrivateDeptData : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "PrivateDeptData"
        }]

    },
    Assets : {
        addAssets : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : ["BankData","BusinessData","InsuranceData","IntellectualPropertyData","MotorVehicleData","OtherAssetsData","PersonalPossessionData","PersonalPossessionData","RealEstateData","SafeDepositData"]
        }],
        addBankData : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "BankData"
        }]
    }
    ,
    Trust : {
        addTrust : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "TrustData"
        }]
    },
    specify_Gift_Benificiaries : {
        addMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],
        specify_Shares : {      
            type : Number,
            required : true
        }
    },
    specify_Replacement_Benificiaries : {
        addMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],
        specify_Shares :{
            type : Number,
            required : true
        }
    },
    Fallback : {
        type : String
    },
 
    additional_Clauses : {
        delay_Payout :{
            type : String
        },
        recommended_Expert_Advisor : {
            type : String
        },
        final_Words : {
            type : String     
        },
        translation : {
            type : String
        },
        custom_Clause : {
            type : String
        },

    },
   Delay_Payout : {
       source_Of_Payout : {
           type : String
       },
       denomination_Of_Payout: {
           type : String
       },
       frequency_Of_Payout : {
           type : String
       },
       conditions_Of_Payout : {
           type : String
       },
       purpose_Of_Payout : {
           type : String
       },
    fallback : {
        type : String
    }   

   }
});

const Will = mongoose.model("WillData", WillSchema);
module.exports = Will;