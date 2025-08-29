const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const {name,email, password,role} = req.body;
    const emailExists = await User.findOne({ email });
    if (emailExists)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User.create({ name,email, password: hashedPassword,role });
    await newUser.save();

    const token = await jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res
      .status(201)
      .json({
        message: "Signup succesful",
        token,
        user: { id: newUser.id, role: newUser.role },
      });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "invalid email" });
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      return res.status(404).json({ message: "Incorrect password" });

    const token = await jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res
      .status(200)
      .json({
        message: "Login succesful",
        token,
        user: { id: user.id, role: user.role },
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
