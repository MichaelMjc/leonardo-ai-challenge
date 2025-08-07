import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import { Footer } from "@/components/footer";
import { ApolloProvider } from "@/components/apollo";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Leonardo AI Challenge v3.5",
	description: "Leonardo AI Challenge v3.5",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Provider>
					<ApolloProvider>
						<Box as="main" flex={1}>
							{children}
						</Box>
						<Footer />
						<Toaster />
					</ApolloProvider>
				</Provider>
			</body>
		</html>
	);
}
