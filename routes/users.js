const express = require("express");
const router = express.Router();

const {
  getUser,
  addUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("./controllers/users");
//console.log(uuidv4());

// let users = [
//   {
//     firstame: "mdummy data, not valid",
//     lastname: "mishra",
//     age: 23,
//   },
//   {
//     firstame: "mdummy data, not valid 02",
//     lastname: "mishra",
//     age: 28,
//   },

// all endpoint here are  == /users
router.get("/", getUser);

router.post("/", addUser); // adding id attribute, after spread opertor

router.get("/:id", getUserById);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);
module.exports = router;
//export defaualt router;


