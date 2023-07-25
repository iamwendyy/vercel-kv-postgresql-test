// Vercel Postgres - Add Log data

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(userId: string, message: string ) {
  try {
    if (!userId || !message) throw new Error('UserId and message required');

    await sql`INSERT INTO Log (Name, Message) VALUES (${userId}, ${message});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Log;`;
  return NextResponse.json({ pets }, { status: 200 });
}

//Vercel KV - Add Log data
/*
  fetch(`${process.env.KV_REST_API_URL}/`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    body: '["HSET", "sessionData", "username", "exampleUser123"]',
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
*/

 
