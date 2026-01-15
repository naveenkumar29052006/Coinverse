import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const findUserByEmail = async (email) => {
    return await prisma.user.findUnique({
        where: { email }
    });
};

export const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};

export const validatePassword = async (user, password) => {
    return await bcrypt.compare(password, user.password);
};

export const saveUser = () => {
    // No-op for Prisma
};

export default prisma;
