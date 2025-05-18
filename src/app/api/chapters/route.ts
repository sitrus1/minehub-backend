import { NextResponse } from 'next/server';

const chapters = [
    {
        name: "Серверы",
        id: "servers"
    },
    {
        name: "Текстур-паки",
        id: "textures"
    },
    {
        name: "Скины",
        id: "skins"
    },
    {
        name: "Моды",
        id: "mods"
    },
    {
        name: "Сиды",
        id: "seeds"
    },
    {
        name: "Карты",
        id: "maps"
    },
];

export async function GET() {
  return NextResponse.json(chapters);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New chapters:', body);
  return NextResponse.json({ message: 'New chapters added:', data: body });
}