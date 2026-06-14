import exp from "express";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";
config();
const { sign } = jwt;
export const authApp = exp.Router();
// Registration for shopkeeper
authApp.post("/register", async (req, res) => {
try {
    const newUser = req.body;
    const emailExists =await UserModel.findOne({
                                                email: newUser.email,
                                            });
    if (emailExists) {
        return res.status(400).json({
        message: "Email already exists",
    });
}
    newUser.password =await hash(newUser.password,12);
    await new UserModel(newUser).save();
res.status(201).json({
  message:
    "Registered Successfully",
});
} 
catch (err) {
res.status(500).json({
  message: err.message,
});
}
});

// Login as shopkeeper
authApp.post("/login", async (req, res) => {
try {
    const {email,password,} = req.body;
    const user =await UserModel.findOne({email,});
    if (!user) {    
    return res.status(400).json({
    message: "Invalid Email",
  });
}
const matched =await compare(password, user.password);
if (!matched) {
  return res.status(400).json({
    message: "Invalid Password",
  });
}
const token = sign(
  {
    userId: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

let userObj =user.toObject();
delete userObj.password;
res.status(200).json({
  message:"Login Success",
  token,
  payload:userObj,
});
} 
catch (err) {
res.status(500).json({
  message: err.message,
});
}
});
// Logout as shopkeeper
authApp.get("/logout", async (req, res) => {
res.status(200).json({
message: "Logout Success",
});
});
