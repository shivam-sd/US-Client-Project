const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = 3000;
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const fileupload = require("express-fileupload");
const DBConnections = require("./DB/DB.Connections");
const adminRoutes = require("./routes/admin.routes");
const eventPostRoutes = require("./routes/eventPost.routes");

DBConnections();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials:true,
}));

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.use("/admin", adminRoutes);
app.use("/admin", eventPostRoutes)


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


app.get("/", (req,res) => {
    res.send("Hello, This is Client Project");
});

app.listen(PORT, () => {
    console.log("Server Started On PORT", PORT);
});