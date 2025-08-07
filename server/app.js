const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const PORT = 3000;
const cors = require("cors");
const DBConnections = require("./DB/DB.Connections");
const adminRoutes = require("./routes/admin.routes");

DBConnections();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials:true,
}));

app.use("/admin", adminRoutes);


app.get("/", (req,res) => {
    res.send("Hello, This is Client Project");
});

app.listen(PORT, () => {
    console.log("Server Started On PORT", PORT);
});