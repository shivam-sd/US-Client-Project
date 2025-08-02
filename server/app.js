const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const PORT = 3000;


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req,res) => {
    res.send("Hello, This is Client Project");
});

app.listen(PORT, () => {
    console.log("Server Started On PORT", PORT);
});