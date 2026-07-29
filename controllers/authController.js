
exports.register = (req, res) => {
    res.json({
        success: true,
        message: "School registered successfully."
    });
};

exports.login = (req, res) => {
    res.json({
        success: true,
        message: "Login successful."
    });
};
