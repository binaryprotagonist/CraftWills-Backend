const members = require("../../models/members.model")

const createMember = async (req, res) => {
    const _id = req.token_data._id
    try {
        const data = new members({
            user_id: _id,
            memberAsPerson: {
                fullname: req.body.memberAsPerson?.fullname,
                Relationship: req.body.memberAsPerson?.Relationship,
                id_type: req.body.memberAsPerson?.id_type,
                id_number: req.body.memberAsPerson?.id_number,
                gender: req.body.memberAsPerson?.gender,
                floorNumber: req.body.memberAsPerson?.floorNumber,
                unitNumber: req.body.memberAsPerson?.unitNumber,
                streetName: req.body.memberAsPerson?.streetName,
                postalCode: req.body.memberAsPerson?.postalCode,
                citizenship: req.body.memberAsPerson?.citizenship,
                dob: req.body.memberAsPerson?.dob,
                country: req.body.memberAsPerson?.country
            },
            memberAsOrganisation: {
                organisationName: req.body.memberAsOrganisation?.organisationName,
                registration_number: req.body.memberAsOrganisation?.registration_number,
                id_country: req.body.memberAsOrganisation?.id_country,
                floorNumber: req.body.memberAsOrganisation?.floorNumber,
                unitNumber: req.body.memberAsOrganisation?.unitNumber,
                streetName: req.body.memberAsOrganisation?.streetName,
                postalCode: req.body.memberAsOrganisation?.postalCode,
            }

        })

        const savedData = await data.save()
        res.json({
            message: "Data has been saved Successfully",
            success: true,
            data: savedData
        })
    }
    catch (err) {
        res.json({
            message: "Something Went Wrong",
            success: false,
            error: err.message
        })
    }
}

const getMembers = async(req,res)=>{
    try {
        const data = await members.find();
        res.json({
            message : "data found successfully",
            success : true,
            data : data
        })
    }
    catch (err) {
        res.json({
            message : "something went wrong",
            success : false,
            error : err.message
        })
    }
}

module.exports = {
    createMember,
    getMembers
}