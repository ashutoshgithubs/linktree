const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const dashBoardData = async (req, res) => {
  const { tokenMail } = req.body;
  console.log("TokenMail", tokenMail);
  try {
    console.log("Inside dashboard try");
    const decodedTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT); // Use jwt.verify to decode and verify the token
    console.log("Decoded tokenMail", decodedTokenMail);
    const email = decodedTokenMail.email;
    console.log("Decoded email", email);
    const user = await User.findOne({ email: email });
    console.log("User in dashboard:", user);
    const userData = {
      name: user.name,
      role: user.role,
      bio: user.bio,
      avatar: user.avatar,
      handle: user.handle,
      links: user.links.length,
    };
    console.log("User data in dashboard:", userData);
    return res.json({ message: "User loaded", userData, status: "Okay" });
  } catch (err) {
    console.log("Error in dashboard: ", err.message);
    return res.json({ status: "error", error: err.message });
  }
};

module.exports = { dashBoardData };
