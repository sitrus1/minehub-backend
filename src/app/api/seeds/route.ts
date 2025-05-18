import { NextResponse } from 'next/server';

const seeds = [
    {
        name: "Выживание",
        id: "survival"
    },
    {
        name: "Эстетичные ",
        id: "aesthetic"
    },
    {
        name: "Спидран",
        id: "speedrun"
    },
    {
        name: "Глючные",
        id: "glitchy"
    },
    {
        name: "Глючные",
        id: "glitchy"
    },
];

export async function GET() {
  return NextResponse.json(seeds);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log('New seeds:', body);
  return NextResponse.json({ message: 'New seeds added:', data: body });
}