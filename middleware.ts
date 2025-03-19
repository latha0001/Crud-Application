import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { jwtVerify } from "jose"

// Secret key for JWT verification
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Paths that don't require authentication
const publicPaths = ["/login", "/signup"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path is public
  if (publicPaths.includes(pathname)) {
    return NextResponse.next()
  }

  // Check for token
  const token = request.cookies.get("token")?.value

  // If no token and not a public path, redirect to login
  if (!token) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  try {
    // Verify token
    await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))
    return NextResponse.next()
  } catch (error) {
    // Invalid token, redirect to login
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - API routes (/api/*)
     * - Static files (/_next/*)
     * - Public files (/public/*)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

