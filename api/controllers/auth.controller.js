import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  // Hash Password
  const hashedPassword = await bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  // Try Catch Post Data
  try {
    await newUser.save();
    res.json({ message: "Signup Succesfull!" });
  } catch (error) {
    next(error);
  }
};