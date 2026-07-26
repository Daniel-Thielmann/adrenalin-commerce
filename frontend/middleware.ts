import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) throw new Error("JWT_SECRET environment variable is required");
const secret = new TextEncoder().encode(jwtSecret)

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/admin") && pathname !== "/login") {
    const token = request.cookies.get("session")?.value

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }

    try {
      await jwtVerify(token, secret)
    } catch {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
}