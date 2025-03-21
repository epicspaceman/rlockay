import { put, list } from '@vercel/blob';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename: string = searchParams.get('filename') ?? "";

  const body = request.body ?? new ReadableStream<Uint8Array>()

  const blob = await put(filename, body, {
    access: 'public',
  });
 
  return NextResponse.json(blob);
}

export async function GET(request: Request) {
    const { blobs } = await list();
    return Response.json(blobs)
}
