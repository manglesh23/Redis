// import session from "express-session";
// import client from "../middleware/redisClient";
export const login = (req, res) => {
    req.session.user = "loggedInUser";
    req.session.userId = "12345"; // Example user ID
    console.log("Session Data:", req.session);
    res.send('Login Successful');
}