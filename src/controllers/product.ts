import { Request, Response } from "express";
import * as productService from "../services/product.service";

export const create = async (req: Request, res: Response) => {
  try {
    await productService.create(req.body);
    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const product = await productService.getAll();
    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await productService.getOneById(+id);
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

    const product = await productService.update(+id, dto);

    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await productService.remove(+id);

    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};
