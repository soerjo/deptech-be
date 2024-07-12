import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const verify = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  const auth = req.header("Authorization");
  if (!auth) return res.status(401).send({ message: "Access denied!!!" });
  let token = auth.split(" ")[1];
  if (!token) return res.status(401).send({ message: "Access denied!!!" });
  try {
    const jwtSecret = process.env.JWT_SECRET || "rahasia";
    const verify = jwt.verify(token, jwtSecret);
    req.user = verify;
    next();
  } catch (err) {
    return res.status(400).send("Invalid token!!!");
  }
};
