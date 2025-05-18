import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: 'MacBook Pro', price: 1999 },
  { id: 2, name: 'iPhone 15', price: 999 },
  { id: 3, name: 'AirPods Pro', price: 249 }
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();
  // Bu yerda oddiy console log qilamiz, real DB yo'q
  console.log('Yangi mahsulot:', body);
  return NextResponse.json({ message: 'Mahsulot qabul qilindi', data: body });
}
