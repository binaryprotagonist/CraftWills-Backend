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
            BankData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "BankData"
            },
            BusinessData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "BusinessData"
            },
            InsuranceData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "InsuranceData"
            },
            IntellectualPropertyData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "IntellectualPropertyData"
            },
            MotorVehicleData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "MotorVehicleData"
            },
            OtherAssetsData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "OtherAssetsData"
            },
            PersonalPossessionData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "PersonalPossessionData"
            },
            RealEstateData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "RealEstateData"
            },
            SafeDepositData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "SafeDepositData"
            },
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
    specify_Residual_Asset_Benificiaries : {
        addMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],
        specify_Shares : {      
            type : Number,
            required : true
        }
    },

    trust_Fallback : {
        fallback_Type : {
            type : String
        },
        split_Equally : {
            type : Boolean
        },
        addMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],

    },
 
    additional_Clauses : {
        delayed_Payout :{
            managedBy : {
                type : String,
            },
            age_Validity : {
                type : Number
            },
            appoint_Benificiaries : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Memberdata"
            }],
        },
        recommended_Advisor : {
            advisor_Name : {
                type : String
            },
            contact_Number : {
                type : Number
            },
            expertise : {
                type : String
            },
        appoint_Advisor :{
            advisor_Name : {
                type : String
            },
            contact_Number : {
                type : Number
            },
            expertise : {
                type : String
            }
        }
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
    
});

const Will = mongoose.model("WillData", WillSchema);
module.exports = Will;