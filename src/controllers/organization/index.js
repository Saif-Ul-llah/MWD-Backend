const errorMiddleware = require("../../middlewares/errorMiddleware");

const RegisterOrganization = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    // return res.status(200).json({ success: true, message: "Organization registered successfully" });
  } catch (error) {
    errorMiddleware(error, req, res);
  }
};

module.exports = { RegisterOrganization };
