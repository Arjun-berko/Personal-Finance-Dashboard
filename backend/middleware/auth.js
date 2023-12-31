const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // const token = req.header('x-auth-token');
    const header = req.header('Authorization');
    const token = header && header.split(' ')[1];

    // Check for token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Add user from payload
        console.log(decoded); // DECODING LINE
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

module.exports = auth;
