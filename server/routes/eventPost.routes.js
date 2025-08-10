const express = require("express");
const router = express.Router();
const authAdmin = require("../middleware/auth.admin");
const { eventPostController, fetchAllEvents, eventDeleteController, GetEventsByIDController } = require("../controllers/eventPost.controller");


router.post("/event/post", authAdmin, eventPostController);
router.get("/events/fetch", fetchAllEvents);
router.get("/events/:id", GetEventsByIDController);
router.delete("/events/delete/:id", eventDeleteController);




module.exports = router;