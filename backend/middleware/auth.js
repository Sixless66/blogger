import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {

    const token = req.headers.authorization;

    console.log("Token ", token);

    try {
         jwt.verify(token, process.env.JWT_SECRET)
         next();
    } catch (error) {
        res.json({success : false, message : "Invalid Token"})
    }
}

export default auth;

  