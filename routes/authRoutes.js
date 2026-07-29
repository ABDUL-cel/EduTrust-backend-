const express = require("express");
const router = express.Router();

// Register
router.post("/register", (req, res) => {
    res.json({
        success: true,
        message: "School registration endpoint working."
    });
});

// Login
router.post("/login", (req, res) => {
    res.json({
        success: true,
        message: "Login endpoint working."
    });
});

module.exports = router;
