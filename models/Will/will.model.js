const { number, string } = require("joi");
const mongoose = require("mongoose");
const WillSchema = new mongoose.Schema({
    user_id: {
        type: String
    },

    willName : {
        type : String
    },
    DATE : {
        type : String
    },

/// Personal Information

    id_Number: {
        type: Number
    },
    id_Type: {
        type: String
    },
    fullName: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    floorNumber: {
        type: String
    },
    unitNumber: {
        type: Number
    },
    streetName: {
        type: String
    },
    postalCode: {
        type: Number
    },
    assetScope: {
        type: String,
        default: "Singapore"
    },

    ///Appoint Primary Executor

    primary_executor_type: {
        type: String,
    },

    addPrimaryExecutor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Members"
        }
    ],

    /// Appoint Replacement Executor

    replacement_executor_type: {
        type: String
    },
    addReplacementExecutor: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Members"
        }
    ],

    /// Appoint Guardian

    guardian_type: {
        type: String
    },
    guardian_executor_type: {     /// joint ? sole? etc
        type: String
    },
    addGuardianExecutor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Members"
    }],

    /// Appoint Replacement Guardian

    guardian_replacement_executor_type: {    /// joint ? sole? etc
        type: String
    },
    addGuardianReplacementExecutor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Members"
    }],

    /// Distribution Of Assets
    /// Liabilities

    liabilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Liabilities'
    }],

    ///Assets
    assets: [{
        assetData: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AssetsData"
        },
        // membersData: [{
        //     member: {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Members",
        //     },
        //     specify_Shares: {
        //         type: Number
        //     }
        //     //// What is to happen if the benificiary does not survive the testator?
        // },
        // ],
    }],

    //Trust 
   trust : [{
       trustData : {
           type : mongoose.Schema.Types.ObjectId,
       },
       addTrust : {
           appointPrimaryTrustee : {
               specifyOwnershipType : {
                   type : String
               },
               trustMembers : [{
                   type : mongoose.Schema.Types.ObjectId,
                   ref : "Members"
               }]
           },
           appointReplacementTrustee : {
               specifyOwnershipType : {
                   type : String
               },
               trustMembers : [{
                   type : mongoose.Schema.Types.ObjectId,
                   ref : "Members"
               }]
           },
           specifyTrusteePowers :{
               type : String
           },
        },
        assets : [{
            assetData : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "AssetsData"
            },
            sharesGivenToTrust : {
                type : Number
            },
            estimatedValueOfShare : {
                type : Number
            }
        }],
        payouts : [{   addAPayout : {
            sourceOfPayout:{
                type : String
            },
            denominationOfPayout: {
                type : String
            },
            frequencyOfPayout: {
                freqOfPay :{
                    type : String
                },
                customField : {
                    type : String
                }
            },
            conditionsOfPayout : {
                ifBenificiaryTurns: {
                    type : Number
                },
                ifBenificiaryAttains : {
                    type : String
                },
                ifBenificiaryIs: {
                    type : String
                },
                customField : {
                    type : String
                }
            },
            purposeOfPayout : {
                type : String
                
            },
            fallback : {
                activateTerminalClause : {
                    type : String
                }
            },
            appointBenificiaries : [{
                type : mongoose.Schema.Types.ObjectId,
                ref : "Members"
            }]
        },}],
        trustFallback : {
            fallBackType : {
                type : String
            },
            description : {
                type : String
            }
            
        },
        additionalClauses : {
            type : String
        }
    }
   ],
   
   // Distribute Residual Assets
  specifyResidualAssetBenificiary : [{
      member :{
          type : mongoose.Schema.Types.ObjectId,
          ref : "Members"
      },
      specifyShares : {
          type : Number
      }
    }],
    trustFallback : { 
        type : mongoose.Schema.Types.Mixed,
    },

    clauses : {
        additionalClauses : {
            delayed_payout : {
                beneficiaryManagedBy : {
                    type : String
                },
                appointBeneficiaries :[{
                    type : mongoose.Schema.Types.ObjectId,
                    ref : "Members"
                }]

            },
            recommendedAdvisor : {
                appointAdvisor : {
                    advisorName : {
                        type : String
                    },
                    contactNumber : {
                        type : Number
                    },
                    expertise : {
                        type : String
                    }
            }
          

            },
            finalWords : {
                type : String
            },
            translation : {
                type : String
            },
            customClause : {
                type : String
            },
            languages : {
                type : String
            },
            conditionsOfPayout : {
                type : String
            }   
        }}
});

const Will = mongoose.model("WillData", WillSchema);
module.exports = Will;