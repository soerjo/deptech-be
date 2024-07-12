import { prisma } from "../db/connect";
import { CreateProductDto, UpdateProductDto } from "../interface/product.interface";
import * as categoryService from "./category.service";

export const create = async (dto: CreateProductDto) => {
  const product = await getOneByName(dto.name);
  if (product) throw new Error("product already exist!");

  const category = await categoryService.getOneByCode(dto.category);
  if (!category) throw new Error("category is not exist!");

  await prisma.product.create({
    data: {
      ...dto,
      stock: 0,
    },
  });
};

export const getOneByName = (name: string) => {
  return prisma.product.findFirst({ where: { name } });
};

export const getOneById = async (id: number) => {
  return prisma.product.findFirst({ where: { id } });
};

export const getAll = async () => {
  return prisma.product.findMany();
};

export const update = async (id: number, dto: UpdateProductDto) => {
  const product = await getOneById(id);
  if (!product) throw new Error("product is not found!");

  await prisma.product.update({
    where: { id },
    data: {
      ...product,
      ...dto,
    },
  });
};

export const remove = async (id: number) => {
  const product = await getOneById(id);
  if (!product) throw new Error("product is not found!");

  await prisma.product.delete({ where: { id } });
};

export const addStock = async (id: number, quantity: number) => {
  const product = await getOneById(id);
  if (!product) throw new Error("product is not found!");

  await prisma.product.update({
    where: { id },
    data: {
      ...product,
      stock: product.stock + quantity,
    },
  });

  return product;
};

export const decreaseStock = async (id: number, quantity: number) => {
  const product = await getOneById(id);
  if (!product) throw new Error("product is not found!");
  if (product.stock < quantity) throw new Error("product out of stock!");

  await prisma.product.update({
    where: { id },
    data: {
      ...product,
      stock: product.stock - quantity,
    },
  });

  return product;
};
