import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();
    const cookie = cookies();
    if (cookie.get(slug)?.value === "visited") {
      const count = await redis.get(slug);
      return NextResponse.json({ fine: true, count });
    }
    const count = await redis.incr(slug);
    return NextResponse.json(
      { count, fine: true },
      {
        headers: {
          "Set-Cookie": `${slug}=visited; Path=${slug} HttpOnly`,
        },
      }
    );
  } catch (ignore) {
    return NextResponse.json({
      fine: false,
    });
  }
}
