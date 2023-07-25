// Vercel KV

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const user = await kv.hgetall('user:me');
  return NextResponse.json(user);
}

// import { kv } from '@vercel/kv';
// import { NextApiRequest, NextApiResponse } from 'next';
 
// export default async function handler(
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) {
//   const user = await kv.hgetall('user:me');
//   return response.status(200).json(user);
// }