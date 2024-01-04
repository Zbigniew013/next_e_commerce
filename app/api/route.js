import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json({ time: new Date().toLocaleString() });
}

// DtOdlvuWDr061lxi
// mongodb+srv://zibi:DtOdlvuWDr061lxi@cluster0.owlfbi3.mongodb.net/?retryWrites=true&w=majority
