import { prisma } from "../db/connect";
import { GenderEnum } from "../enum/gender.enum";
import bcrypt from "bcrypt";
import { CreateUserDto, UpdateUserDto } from "../interface/user.interface";

export const Init = async () => {
  const user = await getOneByEmail("admin@mail.com");
  if (user) return;

  console.log("init admin to db...");
  await prisma.user.create({
    data: {
      first_name: "admin",
      email: "admin@mail.com",
      birthday: new Date(),
      gender: GenderEnum.MALE,
      password: await bcrypt.hash("admin123", 10),
    },
  });
};

export const getOneByEmail = (email: string) => {
  return prisma.user.findFirst({ where: { email } });
};

export const getOneById = (id: number) => {
  return prisma.user.findFirst({ where: { id } });
};

export const create = async (dto: CreateUserDto) => {
  const user = await getOneByEmail(dto.email);
  if (user) throw new Error("email already exist!");

  await prisma.user.create({
    data: {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
    },
  });
};

export const getAll = () => {
  return prisma.user.findMany();
};

export const update = async (id: number, dto: Partial<UpdateUserDto>) => {
  const user = await getOneById(id);
  if (!user) throw new Error("user is not found");

  return prisma.user.update({
    where: { id },
    data: {
      ...user,
      ...dto,
    },
  });
};

export const remove = async (id: number) => {
  const user = await getOneById(id);
  if (!user) throw new Error("user is not found");
  if (user.first_name === "admin") throw new Error("forbiden to remove admin");

  await prisma.user.delete({ where: { id } });
};
