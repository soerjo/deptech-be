import { Request, Response } from "express";
import * as categoryService from "../services/category.service";

export const create = async (req: Request, res: Response) => {
  try {
    await categoryService.create(req.body);
    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const product = await categoryService.getAll();
    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await categoryService.getOneByCode(id);
    if (!product) throw new Error("user is not found!");

    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dto = req.body;

    const product = await categoryService.update(id, dto);

    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};
