"use client"

import { on } from 'events';
import {  AlertCircle, BookCheck, Package, Settings, ShoppingCart, Users, Wallet, Workflow, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react'

type Prop = {
  isActive: boolean,
  onToggle: (arg:boolean) => void
}

export default function Sidebar({ isActive, onToggle }: Prop) {

	const containerRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    onToggle(!isActive)
  }

	useEffect(() => {
		if (containerRef.current && !containerRef.current.contains(document.activeElement)) {
			onToggle(false);
		}
	}, []);

  return (
		<div className="h-full flex  w-screen bg-black/50 ">
			<div
				ref={containerRef}
				className="w-[70%] md:w-[20%] bg-zinc-800 py-4 flex flex-col">
				<button onClick={toggle} className=" flex justify-end">
					<X className="text-white bg-red-500 mr-4" />
				</button>
				<ul className="text-zinc-50 flex flex-col g w-full">
					{menu.map((link, i) => (
						<Link
							key={i}
							href="/admin/products"
							className={`flex  border-zinc-700 px-4 py-2 gap-3 text-zinc-300 hover:ml-1 transition-all delay-100 ${
								menu.length - 1 === i ? "" : "border-b "
							}`}>
							{" "}
							<link.icon size={20}/>
							<p className='capitalize'>{link.link}</p>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}


const menu = [
	{
		link: "products",
		icon: Package,
	},
	{
		link: "cart",
		icon: ShoppingCart,
	},
	{
		link: "users",
		icon: Users,
	},
	{
		link: "settings",
		icon: Settings,
	},
	{
		link: "website",
		icon: Workflow,
	},
	{
		link: "users",
		icon: Users,
	},
	{
		link: "notification",
		icon: AlertCircle,
	},
	{
		link: "payments",
		icon: Wallet,
	},
	{
		link: "orders",
		icon: BookCheck,
	},
];