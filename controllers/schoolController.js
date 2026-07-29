const db = require("../config/db");

exports.registerSchool = (req, res) => {

    const {

        school_name,
        owner_name,
        phone,
        email,
        address,
        password

    } = req.body;

    res.json({

        success: true,

        message: "Registration API Ready",

        data: {

            school_name,
            owner_name,
            phone,
            email,
            address

        }

    });

};
