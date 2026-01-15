import express from "express";
import { body, validationResult } from "express-validator";
const Router = express.Router();
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/authController.js";

import { protect } from "../middleware/auth.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(errors.array());
  }
  next();
};

// Validation middleware
const registerValidation = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

const loginValidation = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

Router.post("/register", registerValidation, validate, registerUser);
Router.post("/login", loginValidation, validate, loginUser);

// Protected routes
Router.get("/profile", protect, getProfile);
Router.put("/profile", protect, updateProfile);
Router.post("/change-password", protect, changePassword);

export default Router;
