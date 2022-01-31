const { number } = require("joi");
const mongoose = require("mongoose");
const WillSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    id_Number : {
        type : Number
    },
    id_Type : {
        type : String
    },
    fullName : {
        type : String
    },
    gender : {
        type : String
    },
    email : {
        type : String
    },
    floorNumber : {
        type : String
    },
    unitNumber : {
        type : Number
    },
    streetName : {
        type : String
    },
    postalCode : {
        type : Number
    },
    assetScope :{
        type : String,
        default : "Singapore"
    },  

    /// Primary Executor

        primary_executor_type : {
            type : String,
        },

        addPrimaryExecutor : [
            {type : mongoose.Schema.Types.ObjectId,
            ref : "Members"}
        ],

    /// Replacement Executor

        replacement_executor_type : {
            type : String
        },
        addReplacementExecutor : [
            {type : mongoose.Schema.Types.ObjectId ,
            ref : "Members"}
        ],
    
    /// Appoint Guardian

        guardian_type : {
            type : String,
        },
        guardian_executor_type : {
            type : String,
            required : true
        },
        addGuardianExecutor : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Members"
        }],

    /// Appoint Replacement Guardian

        guardian_replacement_executor_type : {
            type : String,  
            required : true
        },
        addGuardianReplacementExecutor : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],

    /// Liabilities

        liabilities : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Liabilities'

        },

   ///Assets
        Assets : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "AssetsData"
        },
 //Trust 
        addTrust : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "TrustData"
        }],
        
 // appoint_primary_trustee
        appoint_primary_trustee : {
            type : String,
        },
        addPrimaryTrustee :[{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Members"
        }],
// appoint_replacement_trustee
       appoint_replacement_trustee : {
           type : String,

       },
       addReplacementTrustee :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Members"
    }] ,
    replacementTrusteeDescription : {
        type : String
    },

    assetsOfTrust  : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Members"
    }],

   
// specify_Residual_Asset_Benificiaries 
        addResidualAssetMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],
        specify_Shares : {      
            type : Number,
            required : true
        },

    // trust_Fallback 
        trust_fallback_Type : {
            type : String
        },
        split_Equally : {
            type : Boolean
        },
        addMember : [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Memberdata"
        }],

// Clauses

    // additional_Clauses  
    
        delayed_payout :{
            managedBy : {
                type : String
            },
            age_Validity : {
                type : Number
            },
            appoint_Benificiaries : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Memberdata"
            }],
    
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