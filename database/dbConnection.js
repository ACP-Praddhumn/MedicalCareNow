import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI , {
        dbName : "Doctor_appointment",
    }).then(() => {
        console.log("Connected to DB!")
    }).catch(err => {
        console.log(`error in connecting to db : ${err}`)
    })
}