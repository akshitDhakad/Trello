import { Prisma } from '@prisma/client';

export const userSelectFields = {
  id: true,
  name: true,
  email: true,
  role: true, 
} as Prisma.UserSelect;
