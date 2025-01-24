const express = require("express");
const router = express.Router();
const Auth = require("./auth");
const Organization = require("./organization");

router.use(Auth)
router.use(Organization)


module.exports = router;