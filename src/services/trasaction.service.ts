import { prisma } from "../db/connect";
import { TransactionEnum } from "../enum/transaction.enum";
import { IProduct } from "../interface/product.interface";
import { CreateTransaction, filterTransaction } from "../interface/transaction.interface";
import * as productService from "./product.service";

export const create = async (dto: CreateTransaction) => {
  let product: IProduct;
  if (dto.transaction_type === TransactionEnum.IN) {
    product = await productService.addStock(dto.productId, dto.quantity);
  } else {
    product = await productService.decreaseStock(dto.productId, dto.quantity);
  }

  await prisma.transaction.create({
    data: {
      ...dto,
      productId: product.id,
    },
  });
};

export const getAll = async (dto?: filterTransaction) => {
  const productId = dto?.productId ? +dto.productId : undefined;
  const transactions = await prisma.transaction.findMany({
    where: { productId: productId },
  });
  return transactions;
};
