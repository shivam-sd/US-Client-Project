const express = require("express");
const router = express.Router();
const authAdmin = require("../middleware/auth.admin");
const { eventPostController } = require("../controllers/eventPost.controller");


router.post("/event/post", authAdmin, eventPostController);



module.exports = router;