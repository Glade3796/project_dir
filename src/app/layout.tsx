import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Unbounded as FontSans } from "next/font/google";

import "./styles/globals.css";
import Navbar from "../components/Navbar";

import { cn } from "@/lib/utils";
import { MainNavbar } from "@/components/MainNavbar";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "cyber_Glade",
	description: "Projects by cyber_Glade",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<MainNavbar />
				{children}
			</body>
		</html>
	);
}
