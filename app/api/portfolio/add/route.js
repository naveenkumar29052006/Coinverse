import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req) {
    const user = await getSession(req);

    if (!user) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { coinId, quantity, purchasePrice, date, notes } = await req.json();

        if (!coinId || !quantity || !purchasePrice) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        const transaction = await prisma.portfolio.create({
            data: {
                userId: user.id,
                coinId,
                quantity: parseFloat(quantity),
                purchasePrice: parseFloat(purchasePrice),
                date: date || new Date().toISOString(),
                notes
            }
        });

        return NextResponse.json(transaction, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
