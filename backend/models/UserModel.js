import {model,Schema}from "mongoose";

const userSchema = new Schema(
{
        shopName: {
            type: String,
            required: true,
        },
        ownerName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
},
{
timestamps: true,
}
);
export const UserModel = model("User",userSchema);