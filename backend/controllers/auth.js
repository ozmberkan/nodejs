const Auth = require("../models/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, username, password, displayName, phoneNumber } = req.body;

  const user = await Auth.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "Bu kullanıcı zaten kayıtlı." });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await Auth.create({
    email,
    username,
    password: hashedPassword,
    displayName,
    phoneNumber,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(201).json({
    uid: newUser._id,
    email: newUser.email,
    username: newUser.username,
    displayName: newUser.displayName,
    phoneNumber: newUser.phoneNumber,
    role: newUser.role,
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Auth.findOne({ email });

  if (!user) {
    return res.status(500).json({ message: "Kullanıcı bulunamadı." });
  }

  const comparedPassword = bcrypt.compare(password, user.password);

  if (!comparedPassword) {
    return res.status(500).json({ message: "Hatalı şifre." });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    uid: user._id,
    email: user.email,
    username: user.username,
    displayName: user.displayName,
    phoneNumber: user.phoneNumber,
    role: user.role,
    token,
  });
};

module.exports = { register, login };
