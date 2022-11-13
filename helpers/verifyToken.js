import jwt from "jsonwebtoken";


export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.status(401).json({
            status: "error",
            code: 401,
            msg: "Access denied"
        });
    }
    else {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    status: "error",
                    code: 403,
                    msg: "Invalid token"
                });
            }
            req.user = user;
            console.log(user);
            next();
        });
    }
}



export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.user.id === req.params.id || req.user.user.isAdmin) {
            next();
        }
        else {
            return res.status(403).json({
                status: "error",
                code: 403,
                msg: "You are not allowed to do that"
            });
        }
    });
}


export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.user.isAdmin) {
            next();
        }
        else {
            return res.status(403).json({
                status: "error",
                code: 403,
                msg: "You are not allowed to do that"
            });
        }
    });
}