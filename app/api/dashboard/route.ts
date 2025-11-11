import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    stats: {
      users: 1280,
      revenue: 54000,
      orders: 342,
    },
    message: "Dashboard data loaded successfully",
  };

  return NextResponse.json(data);
}
