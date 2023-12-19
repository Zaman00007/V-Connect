import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    
    const token = req.cookies.access_token;
    if (!token) {
        return res.status(401).json({ message: "You need to login" });
    }

    jwt.verify(token, process.env.JWT, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = decoded;
        next(); 
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken (req, res, next, ()=>{
        // return res.json({message: "Hello"});
    if (!req.user.isAdmin) {
        return res.status(401).json({ message: "You need to be an admin" });
    }
    next();
})
}
