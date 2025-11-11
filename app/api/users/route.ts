import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { name: "Nithin", email: "nithin@example.com" },
    { name: "Siva", email: "siva@example.com" },
  ];

  return NextResponse.json({ users });
}
