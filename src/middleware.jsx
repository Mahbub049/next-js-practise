import { NextResponse } from "next/server";

export function middleware(request){
    if (request.nextUrl.pathname.startsWith('/about')) {
        return NextResponse.rewrite(new URL('/about-2', request.url))
      }
    return NextResponse.rewrite(new URL("/blogs", request.url))
}

export const config = {
    matcher: ["/services", "/about"]
}