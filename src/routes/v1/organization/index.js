const express = require("express");
const router = express.Router();

// const { protect } = require("../../middlewares/authMiddleware");
const { RegisterOrganization } = require("../../../controllers/organization");

router.post("/registerOrganization", RegisterOrganization);

module.exports = router;
