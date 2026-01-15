import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET(req) {
    const user = await getSession(req);

    if (!user) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({ user });
}
