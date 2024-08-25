import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
        
    },
    mobile: Number,
    password: String,
}, { timestamps: true });

const User = mongoose.model("Users", userSchema);

export default User;
