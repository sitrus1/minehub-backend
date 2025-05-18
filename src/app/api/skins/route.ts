import { NextResponse } from 'next/server';

const skins = [
    {
        name: "Обычные",
        id: "default"
    },
    {
        name: "Средневековье",
        id: "medieval"
    },
    {
        name: "Животные",
        id: "animals"
    },
    {
        name: "Фандомные",
        id: "fandom"
    },
    {
        name: "Ютуберов",
        id: "youtubers"
    },
];

export async function GET() {
  return NextResponse.json(skins);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New skins:', body);
  return NextResponse.json({ message: 'New skins added:', data: body });
}