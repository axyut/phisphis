import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const linkSchema = new mongoose.Schema(
    {
        link_id: {
            type: String,
            required: [true, "Link ID is required"],
            unique: true,
            tirm: true,
            minlength: 8,
            maxlength: 40,
            default: uuidv4(),
        },
        socialName: {
            type: String,
            required: [true, "Social Name is required."],
            trim: true,
            maxlength: 20,
        },
        socialType: {
            type: String,
            required: [true, "Social Name is required."],
            trim: true,
            maxlength: 20,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        address: {
            type: String,
            required: [true, "Address is required"],
            tirm: true,
        },
        // expiry: {
        //     type: Date,
        //     required: [true, "Expiry is required"],
        //     tirm: true,
        // },
    },
    { timestamps: true }
);

const Link = mongoose.model("Link", linkSchema);
export default Link;
