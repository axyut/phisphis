import mongoose from "mongoose";

export const connectDB = async (connectionString: string) => {
    try {
        const connection = await mongoose.connect(connectionString, {});
        console.log(
            "Successfully connected to DB.",
            connection.connection.name,
            connection.connection.host,
            connection.connection.port
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
