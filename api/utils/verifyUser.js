import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  const JWT_SECRET =
    "033cde1a8bf37cea72ea65da0ac3613c6068eef350146913950660cd977246b0a92d3b1a5ead5cd7ac2c9331871023d7cbc8b76097c2f457d886e66aef0a8c41";
  if (!token) return next(errorHandler(401, "you are not authenticated!"));
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid!;"));
    req.user = user;
    next();
  });
};
