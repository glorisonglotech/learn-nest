const mongoose = require('mongoose');

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection to Database is established");
    } catch (error) {
        console.error("Error:",error);
    }
}

module.exports = connectDB;