const express = require("express");
const router = express.Router();

//functions
const { getAllUsers, createUser, updateUser } = require("../controllers/users"); // goes into control

router.route("/view").get(getAllUsers); // view data
router.route("/add").post(createUser); // add data
router.route("/edit/:id").patch(updateUser); // update data if we want edit only one object's parameter use PATCH

module.exports = router;
