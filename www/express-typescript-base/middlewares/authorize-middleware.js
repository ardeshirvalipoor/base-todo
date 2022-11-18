"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jwt = require("jsonwebtoken");
function authorize(ADMINS = []) {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null)
            return res.sendStatus(401);
        const decode = jwt.decode(token);
        if (!ADMINS.includes(decode.email)) {
            return res.sendStatus(403);
        }
        next();
    };
}
exports.authorize = authorize;
