"use client"


import { AsideMenu } from "./_components/aside-menu";
import { Header } from "./_components/header";
import { useState } from "react";



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  

  return <div className={`antialiased min-h-screen bg-zinc-100`}>
	<AsideMenu sidebarOpen={sidebarOpen} setSidebar={setSidebarOpen} />
	<div className="lg:pl-64">
	 <Header setSidebar={setSidebarOpen}/>
	{children}
	</div>
  </div>
}
