import { NextResponse, NextRequest, URLPattern } from "next/server";

const protectedRoutes = ["/profile", "/info"];

const protectedUrlPatterns = protectedRoutes.map(
	(route) => new URLPattern({ pathname: route })
);

const isProtectedRoute = (url: string, pathname: string) => {
	const isProtected = protectedUrlPatterns.some((pattern) => pattern.test(url));

	return isProtected;
};

export function middleware(request: NextRequest) {
	const usernameCookie = request.cookies.get("leonardo_username")?.value;
	const jobTitleCookie = request.cookies.get("leonardo_job_title")?.value;

	if (
		!usernameCookie &&
		!jobTitleCookie &&
		isProtectedRoute(request.url, request.nextUrl.pathname)
	) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}
