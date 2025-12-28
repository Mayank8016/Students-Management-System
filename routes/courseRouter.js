const express = require("express");
const { getCourses, createCourse } = require("../controllers/courseControllers");
const { userauth } = require("../middlewares/auth");
const { authorize } = require("../middlewares/role");

const router = express.Router();


    router.get("/courses", userauth, getCourses);
    router.post("/courses", userauth, authorize("admin"), createCourse);

module.exports = router;
