"use client";

import {
	Equal,
	AlertCircle,
	BookCheck,
	Package,
	Settings,
	ShoppingCart,
	Users,
	Wallet,
	Workflow,
	X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export default function Header() {
	const [isActive, setIsActive] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				console.log("clicked");
				setIsActive(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => removeEventListener("mousedown", handleOutsideClick);
	}, []);

	return (
		<>
			<header className=" p-4 outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4">
				<div>
					<button onClick={() => setIsActive(true)}>
						<Equal />
					</button>
				</div>
			</header>
			<div
				className={`h-full flex fixed right-0 top-0 transition-all delay-150 w-screen bg-black/50 ${isActive ? "translate-x-0" : "-translate-x-full"}`}>
				<div
					ref={containerRef}
					className=" w-[50%] sm:w-[30%] z-50 md:w-[20%] bg-blue-950 py-4 flex flex-col relative gap-4">
					<button
						onClick={() => setIsActive(false)}
						className=" flex justify-end">
						<X className="text-white  mr-4" />
					</button>
					<ul className="text-zinc-50 px-2 flex flex-col g w-full mb-4">
						{menu.map((link, i) => {
							return (
								<Link
									onClick={() => setIsActive(false)}
									key={i}
									href={`/admin/${link.link}`}
									className={`flex rounded  border-zinc-700 px-4 py-2 gap-3 text-zinc-300 hover:ml-[1px] hover: hover:bg-blue-900 transition-all delay-100 border-zinc-500! 
									}`}>
									<link.icon size={20} />
									<p className="capitalize">{link.link}</p>
								</Link>
							);
						})}
					</ul>
				</div>
			</div>
		</>
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
		link: "banners",
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
