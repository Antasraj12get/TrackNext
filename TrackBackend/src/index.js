import dotenv from "dotenv"

import express from "express";
import connectDB from "./db/index.js"
import { app } from "./app.js";

dotenv.config({
    path:"./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 9588, () => {
        console.log(`server is running at Port: ${process.env.PORT}` )
    })
})
.catch((err) => {
    console.log("Mongodb connection FAILED", err)
})





/*




const app = express();

(async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", () => {
            console.log("error", error)
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } 
    catch (error) {
        console.log("Error", error)
        throw err;
    }
})()

*/



