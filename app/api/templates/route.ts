import { NextResponse } from 'next/server';
import clientPromise from '../../../utils/db';

export async function POST(request: Request) {
  const db = (await clientPromise).db(); // Connect to the database
  const { title, content } = await request.json();

  if (!title || !content) {
    return NextResponse.json({ message: 'Missing title or content' }, { status: 422 });
  }

  // Insert the new template into the database
  await db.collection('templates').insertOne({ title, content });
  return NextResponse.json({ message: 'Template created' }, { status: 201 });
}

export async function GET() {
  const db = (await clientPromise).db(); // Connect to the database
  const templates = await db.collection('templates').find({}).toArray();

  return NextResponse.json(templates);
}