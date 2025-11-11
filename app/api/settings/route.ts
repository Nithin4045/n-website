import { NextResponse } from "next/server";

export async function GET() {
  const settings = {
    theme: "light",
    notifications: true,
  };

  return NextResponse.json({ settings });
}
