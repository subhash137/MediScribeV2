
const jwt = require('jsonwebtoken');

const AuthenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer token format
    
    if (!token) {
      
      return res.status(401).json({ message: 'Token is missing' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      
      next();
    });
  };

module.exports =  AuthenticateToken;