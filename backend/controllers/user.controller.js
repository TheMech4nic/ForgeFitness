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

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password ){
            return res.status(400).json({
                message:"Something is missing",
                success : false
            });
        };
        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Incorrect email or password",
                success : false
            });
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect email or password",
                success : false
            });
        };

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {expiresIn:'1d'});

        user = {
            _id : user._id,
            firstName: user.firstName,
            email : user.email,
            phoneNumber: user.phoneNumber,
            role:user.role
        }

        return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpsOnly:true, sameSite:'strict'}).json({
            message : `Welcome ${user.firstName}`,
            user,
            success: true
        });

    } catch (error) {
        console.log(error)
    }
};