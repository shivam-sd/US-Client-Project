const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log("Token received:", req);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded token:", decoded);
        req.admin = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
        
    }
}


module.exports = authAdmin;