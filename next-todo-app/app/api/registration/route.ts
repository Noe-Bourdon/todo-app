'use server';

import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function POST(request: Request) {
    const { name, email, password} = await request.json();
    const connection = await db();
    await connection.execute(
        //　ユーザーを登録するSQLクエリ
        'INSERT INTO users (email, name, password) VALUES (?, ?, ?)',
        [email, name, password]
    );
    return NextResponse.json({ name, email, password });
}

