// const mongoose = require("mongoose");
import mongoose from "mongoose";

export const connectDB = async (username: string, pass: string, db_name: string) => {
  try {
    // const conn = await mongoose.connect(URI, {
    //   dbName: "file-uploader-DB",
    //   user: "local",
    //   pass: "asdf",
    //   autoCreate: true,
    //   autoIndex: true,
    // });
    const connection = await mongoose.connect(`mongodb+srv://${username}:${pass}@newcluster.zcb8pse.mongodb.net/${db_name}`)
    console.log("Successfully connected to DB.", connection.connection.name, connection.connection.host, connection.connection.port)

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
