const mongoose = require("mongoose")
const LiabilitiesSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    privateDept: {
        dept_Name: {
            type: String
        },
        
        description: {
            type: String
        },
        lender: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Memberdata"
            }
        ],
        current_Outstanding_Amount: {
            type: Number
        },
    },
    securedLoan: {
        loanName: {
            type: String,
        }
        ,
        loanProvider: {
            type: String,
        },
        loan_Number: {
            type: String,
        },
        loan_Id_Number: {
            type: Number,
        },
        description: {
            type: String
        },
        addAssets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "BankData"
            }
        ],
        current_Outstanding_Amount: {
            type: Number
        },

    },
    unsecuredLoan: {
        loanProvider: {
            type: String,
        },
        loan_Number: {
            type: String,
        },
        loan_Id_Number: {
            type: Number,
        },
        description: {
            type: String
        },
        current_Outstanding_Amount: {
            type: Number
        }, 

    }
},{ timestamps: true })

const Liability = mongoose.model("Liabilities", LiabilitiesSchema);
module.exports = Liability;