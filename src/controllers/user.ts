import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  try {
    await userService.create(req.body);
    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.send({ message: "succcess", data: users });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userService.getOneById(+id);
    if (!user) throw new Error("user is not found!");

    res.send({ message: "succcess", data: user });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dto = req.body;

    const user = await userService.update(+id, dto);

    res.send({ message: "succcess", data: user });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await userService.remove(+id);

    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};
