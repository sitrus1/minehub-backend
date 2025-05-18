import { NextResponse } from 'next/server';

const servers = [
  {
    name: "Пвп",
    id: "pvp"
  },
  {
    name: "Мини-игры",
    id: "minigames"
  },
  {
    name: "Анархия",
    id: "anarchy"
  },
  {
    name: "Выживания",
    id: "survival"
  },
  {
    name: "Грифер",
    id: "grief"
  },
  {
    name: "Ролевая",
    id: "roleplay"
  },
];

export async function GET() {
  return NextResponse.json(servers);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New servers:', body);
  return NextResponse.json({ message: 'New servers added:', data: body });
}
