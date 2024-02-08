// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const connectDB = async (URI: string) => {
  try {
    // const conn = await mongoose.connect(URI, {
    //   dbName: "file-uploader-DB",
    //   user: "local",
    //   pass: "asdf",
    //   autoCreate: true,
    //   autoIndex: true,
    // });
    const conn = await mongoose.createConnection(URI);
    console.log(`MongoDB Connected: ${conn.readyState}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
