// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes protégées
const protectedRoutes = ['/admin', '/villa-dream']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__session')?.value || null

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/sign', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [],
}
