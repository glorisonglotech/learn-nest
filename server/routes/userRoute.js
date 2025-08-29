const express = require("express");
const {
  getAllUsers,
  getUserById,
  registerUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.patch("/:id/role", updateUserRole);

router.delete("/:id", deleteUser);

module.exports = router;
