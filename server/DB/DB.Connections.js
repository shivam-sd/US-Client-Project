const mongoose = require("mongoose");

const DBConnections = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Database Connected Successfully");
    }).catch((error) => {
        console.error("Database Connection Failed:", error);
    });
}

module.exports = DBConnections;
