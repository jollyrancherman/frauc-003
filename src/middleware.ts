import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
  // update user's auth session
  const path = request.nextUrl.pathname;

  const protectedRoutes: string[] = [];
  const authRoutes: string[] = [];

  const isProtecteRoute = protectedRoutes.includes(path);
  const isAuthRoute = authRoutes.includes(path);

  const { user, supabaseResponse } = await updateSession(request);

  // console.log('user from middleware', user);

  if (isProtecteRoute && !user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthRoute && user) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
