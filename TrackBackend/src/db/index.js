import mongoose from "mongoose";



const DB_NAME = "trackNext";
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connection successfullay:`)
        
    } catch (error) {
        console.log("MongoDb connection error", error)
        process.exit(1);
    }
}

export default connectDB;