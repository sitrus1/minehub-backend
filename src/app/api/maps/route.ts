import { NextResponse } from 'next/server';

const maps = [
    {
        name: "Приключения",
        id: "adventure"
    },
    {
        name: "Выживания",
        id: "survival"
    },
    {
        name: "Головоломки",
        id: "puzzles"
    },
    {
        name: "Паркур",
        id: "parkour"
    },
    {
        name: "Пвп",
        id: "pvp"
    },
    {
        name: "Мини-игры",
        id: "minigames"
    },
];

export async function GET() {
  return NextResponse.json(maps);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New maps:', body);
  return NextResponse.json({ message: 'New maps added:', data: body });
}