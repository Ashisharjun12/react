import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs';

export const SignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcryptjs.hash(password, 10)

        const createdUser = new User({
            name,
            email,
            password: hashPassword 
        });

        await createdUser.save();
        res.status(201).json({ message: "User created successfully!!" });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error!!" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error!!" });
    }
};
