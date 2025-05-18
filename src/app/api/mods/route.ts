import { NextResponse } from 'next/server';

const mods = [
    {
        name: "Технические",
        id: "tech"
    },
    {
        name: "Декоративные",
        id: "decorative"
    },
    {
        name: "Мобы",
        id: "mobs"
    },
    {
        name: "Пвп",
        id: "pvp"
    },
    {
        name: "Строительство",
        id: "building"
    },
];

export async function GET() {
  return NextResponse.json(mods);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New mods:', body);
  return NextResponse.json({ message: 'New mods added:', data: body });
}