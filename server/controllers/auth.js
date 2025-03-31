const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const defaultLink = {
      url: "https://LinkRel-lovat-mu.vercel.app",
      title: "LinkRel",
      icon: "https://i.ibb.co/rKYQgYLD/image-removebg-preview-1.png",
    };

    const user = await User.create({
      handle,
      email,
      password: hashedPassword, // Store the hashed password
      role: category,
      links: [defaultLink],
    });
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    console.log("user", user);
    return res.json({
      message: "user created",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (err) {
    if (err.code === "11000") {
      console.log("Error", err);
      return res.json({
        message: "Try different handle or email",
        status: "error",
      });
    }
    return res.json({ message: err.message, status: "error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({ status: "not found", error: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password); // Compare the hashed password
    if (!isMatch) {
      console.log("Unmatched");
      return res.json({ status: "error", error: "Wrong Password" });
    }
    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);
    return res.json({
      message: "user found",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (err) {
    return res.json({ message: err.message, status: "error" });
  }
};

module.exports = { registerUser, loginUser };
