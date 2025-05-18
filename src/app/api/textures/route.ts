import { NextResponse } from 'next/server';

const textures = [
    {
        name: "Пвп",
        id: "pvp"
    },
    {
        name: "Без изменений",
        id: "Faithful"
    },
    {
        name: "Тематические ",
        id: "thematic"
    },
    {
        name: "Реалистичные",
        id: "realistic"
    },
    {
        name: "Ютуберов",
        id: "youtubers"
    },
];

export async function GET() {
  return NextResponse.json(textures);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New textures:', body);
  return NextResponse.json({ message: 'New textures added:', data: body });
}