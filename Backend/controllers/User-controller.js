import userModel from "../models/user-model.js";
import bcrypt from 'bcrypt';
import { generatedToken } from "../utils/generatedToken.js";

export const UserRegister = async (req, res) => {
  try {
    const { username, email, password, mobile } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

   
    user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      mobile,
    });

    return res.status(201).json({ message: "User created successfully", user });

  } catch (error) {
    console.error('Error during user registration:', error); // Improved logging
    res.status(500).json({ error: "Error in user registration", details: error.message });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generatedToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000 // 1 hour
    });
    return res.status(200).json({ message: "User logged in successfully", token ,user});

  } catch (error) {
    console.error('Error during user login:', error); // Improved logging
    res.status(500).json({ error: "Error in user login", details: error.message });
  }
};

export const UserLogout = async (req,res)=>{
  res.cookie("token","");
   res.status(200).json({ message: "User loggout in successfully" });

}