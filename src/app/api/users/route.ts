import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'Ali', age: 25 },
  { id: 2, name: 'Laylo', age: 30 },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Yangi foydalanuvchi:', body);
  return NextResponse.json({ message: 'Foydalanuvchi qabul qilindi', data: body });
}
