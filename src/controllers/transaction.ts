import { Request, Response } from "express";
import * as transactionService from "../services/trasaction.service";
import { filterTransaction } from "../interface/transaction.interface";

export const create = async (req: Request, res: Response) => {
  try {
    await transactionService.create(req.body);
    res.send({ message: "succcess" });
  } catch (error: any) {
    res.status(400).send({ message: error?.message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const filter: filterTransaction = req.query;
    console.log({ filter });
    const product = await transactionService.getAll(filter);
    res.send({ message: "succcess", data: product });
  } catch (error: any) {
    console.log({ error });
    res.status(400).send({ message: error?.message });
  }
};
