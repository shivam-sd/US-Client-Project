const adminModel = require("../models/Admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = await adminModel.create({email, password: hashedPassword});
        const token = jwt.sign({email: email}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(201).json({message: "Admin registered successfully", newAdmin, token});
    }catch(error){
        res.status(500).json({message: "Internal Server Error"});
        console.log("Error in registerAdmin:", error);
    }
}


const loginAdmin = async (req,res) => {
    const {email, password} = req.body;
    try{
        const admin = await adminModel.findOne({email});
        if(!admin){
            return res.status(404).json({message: "Admin not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(password,admin.password);
        if(!isPasswordCorrect){
            return res.status(401).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({email: admin.email}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.status(200).json({message:"Login successful",admin, token});
    }catch(error){
        res.status(500).json({message: "Internal Server Error"}, error);
        console.log("Error in loginAdmin:", error);
    }
}


module.exports = {
    registerAdmin,
    loginAdmin
};