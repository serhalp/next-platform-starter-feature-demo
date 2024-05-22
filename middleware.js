import { NextResponse } from 'next/server';

export function middleware() {
    return NextResponse.redirect(new URL('/blobs'));
}

export const config = {
    matcher: '/flobs'
};
