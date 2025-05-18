import { NextResponse } from 'next/server';

const minecraft = [
    {
        name: "Лаунчеры",
        id: "launchers"
    },
    {
        name: "Клиенты",
        id: "clients"
    },
    {
        name: "Читерские",
        id: "cheats"
    },
];

export async function GET() {
  return NextResponse.json(minecraft);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New minecraft:', body);
  return NextResponse.json({ message: 'New minecraft added:', data: body });
}