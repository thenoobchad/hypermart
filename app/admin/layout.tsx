"use client"


import Header from "./_components/header";
import Footer from "./_components/footer";
import Sidebar from "./_components/sidebar";
import { useState } from "react";


export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
const [isActive, setIsActive] = useState(false)

	return (
		<div className="bg-zinc-50 w-full flex flex-col overflow-hidden">
			<div
				className={`fixed h-screen ${
					isActive ? "translate-x-0" : "-left-[100%]"
				} `}>
				<Sidebar isActive={isActive} onToggle={setIsActive} />
			</div>
			<div className="w-full">
				<Header isActive={isActive} onToggle={setIsActive} />
				<div className="flex min-w-">{children}</div>
				<Footer />
			</div>
		</div>
	);
}
