import { Schema, model } from "mongoose";

const userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: null
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isGitHub: {
        type: Boolean,
        default: false
    },
    isGoogle: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "carts"
    }
});

export const userModel = model("Users", userSchema)
