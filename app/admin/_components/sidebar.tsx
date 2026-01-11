"use client"

import { on } from 'events';
import { Accessibility, AlertCircle, BookCheck, List, ListOrdered, Package, Settings, ShoppingCart, Users, Wallet, WholeWord, Workflow, X } from 'lucide-react';
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
			<div ref={containerRef} className="w-[70%] md:w-[20%] bg-zinc-800 p-4 flex flex-col">
				<button onClick={toggle} className=' flex justify-end'>
					<X className="text-white bg-red-500" />
				</button>
				<ul className="text-zinc-50 flex flex-col g w-full">
					<Link href="/admin/products" className="flex py-2 gap-3">
						{" "}
						<Package />
						Products
					</Link>
					<li className="flex py-2 gap-3">
						<ShoppingCart />
						Cart
					</li>
					<li className="flex py-2 gap-3">
						<Users />
						Users
					</li>
					<li className="flex py-2 gap-3">
						<Settings /> Settings
					</li>
					<li className="flex py-2 gap-3">
						<Workflow/>
						Website
					</li>
					<li className="flex py-2 gap-3">
						<AlertCircle />
						Notification
					</li>
					<li className="flex py-2 gap-3">
						<Wallet /> Payments
					</li>
					<li className="flex py-2 gap-3">
						<BookCheck /> Orders
					</li>
				</ul>
			</div>
		</div>
	);
}
