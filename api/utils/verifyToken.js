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

        // Attach the decoded user information to the request object
        req.user = decoded;
        next(); // Call next() inside the callback
    });
};
