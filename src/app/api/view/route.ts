import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
    const count = await redis.incr(slug);
    return NextResponse.json({ count, fine: true });
  } catch (ignore) {
    return NextResponse.json({
      fine: false,
    });
  }
}
