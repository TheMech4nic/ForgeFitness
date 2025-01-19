import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { User } from "../models/users.model.js";

export const register = async (req,res) => {
    try {
        const {firstName, lastName, email, phoneNumber, password, weight, height, dob } = req.body
        if(!firstName || !lastName || !email || !phoneNumber || !password || !weight || !height || !dob){
            return res.status(400).json({
                message:"Something is missing",
                success : false
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already exists with this email",
                success : false
            });
        };
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            password:hashedPassword,
            dateOfBirth : dob,
            profile: {
                weight,
                height,
            },
        });

        return res.status(201).json({
            message : "Account created successfully",
            success : true
        })

    } catch (error) {
        console.log(error);
    };
};