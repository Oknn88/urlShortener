const router = require("express").Router();
const urlController = require("../controllers/urlController");
const validation = require("../middleware/emailValidationMiddileware");

router.post("/", validation, urlController.longUrlConvert);
router.post("/:hex", validation, urlController.shortUrlConvert);

module.exports = router;
