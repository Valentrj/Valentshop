import { NextResponse } from "next/server";
import { getLiveStatus } from "@/lib/live-status";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(await getLiveStatus(), {
    headers: { "Cache-Control": "no-store" },
  });
}
