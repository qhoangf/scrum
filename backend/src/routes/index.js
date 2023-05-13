const express = require("express");
const router = express.Router();
const accounts_route = require("./accounts_route");
const companies_route = require("./companies_route");

router.use("/accounts", accounts_route);
router.use("/companies", companies_route);

module.exports = router;
