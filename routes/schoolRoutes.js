const express = require("express");

const router = express.Router();

const schoolController =
require("../controllers/schoolController");

router.post(
    "/register",
    schoolController.registerSchool
);

module.exports = router;
