import { cookies } from "next/headers"
import { jwtVerify } from "jose"

// Secret key for JWT signing and verification
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export interface Session {
  userId: string
  name: string
  email: string
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET))

    return {
      userId: payload.sub as string,
      name: payload.name as string,
      email: payload.email as string,
    }
  } catch (error) {
    // Invalid or expired token
    return null
  }
}

