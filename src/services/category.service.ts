import { prisma } from "../db/connect";
import { CreateCategoryDto, UpdateCategoryDto } from "../interface/category.interface";

export const create = async (dto: CreateCategoryDto) => {
  const category = await getOneByName(dto.name);
  if (category) throw new Error("category already exist!");

  await prisma.category.create({ data: dto });
};

export const getOneByName = (name: string) => {
  return prisma.category.findFirst({ where: { name } });
};

export const getOneByCode = async (code: string) => {
  return prisma.category.findFirst({ where: { code } });
};

export const getAll = async () => {
  return prisma.category.findMany();
};

export const update = async (code: string, dto: UpdateCategoryDto) => {
  const category = await getOneByCode(code);
  if (!category) throw new Error("category is not found!");

  await prisma.category.update({
    where: { code },
    data: {
      ...category,
      ...dto,
    },
  });
};
