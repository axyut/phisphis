import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const socialSchema = new mongoose.Schema(
    {
        social_id: {
            type: String,
            required: [true, "Social ID is required"],
            unique: true,
            tirm: true,
            minlength: 8,
            maxlength: 40,
            default: uuidv4(),
        },
        name: {
            type: String,
            required: [true, "Name is required"],
            tirm: true,
            minlength: 2,
            maxlength: 20,
        },
        type: {
            type: String,
            required: [true, "Type is required"],
            tirm: true,
            minlength: 2,
            maxlength: 20,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        phis_mail: {
            type: String,
            required: [true, "Physical Mail is required"],
            tirm: true,
            maxlength: 100,
        },
        phis_pass: {
            type: String,
            required: [true, "Physical Password is required"],
            tirm: true,
            maxlength: 100,
        },
    },
    { timestamps: true }
);

const Social = mongoose.model("Social", socialSchema);
export default Social;
