

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AlertComponent } from "@/components/ui/alert";
import { Toaster } from 'sonner';

const poppins = localFont({
	src: [
		{
			path: "../public/fonts/Poppins-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Poppins-SemiBold.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Poppins-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Hypermart & Stores",
	description: "Online market for trusted products...",
};

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`antialiased ${poppins.className} w-full`}>
				
					{children}
					<AlertComponent />
				<Toaster 
					position="top-center"
					richColors
					
					toastOptions={{
						style: {
							borderRadius: '2px',
							boxShadow:"none"
						},
						classNames: {
							title: 'text-[16px]',
							description: 'text-md',
						},
					}}
				/>
			</body>
		</html>
	);
}
