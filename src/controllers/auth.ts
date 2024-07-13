import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getOneByEmail } from "../services/user.service";

type RequestBody = {
  name: string;
  email: string;
  password: string;
};

export const test = async (req: Request, res: Response) => {
  res.status(200).send({ message: "success test!" });
};

export const loginUser = async (req: Request, res: Response) => {
  // get user
  const { email, password } = req.body;
  const user = await getOneByEmail(email);
  if (!user) return res.status(400).send({ message: "user and password is not valid" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send({ message: "user and password is not valid" });

  // Create and assign a JWT
  const jwtSecret = process.env.JWT_SECRET || "rahasia";
  const jwtExpiresIn = process.env.JWT_LIFETIME || "1h";

  const { password: hashPassword, ...payload } = user;
  const token = jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });

  res.header("Authorization", `Bearer ${token}`).send({
    message: "success",
    data: {
      payload: payload,
      jwt: token,
    },
  });
};
