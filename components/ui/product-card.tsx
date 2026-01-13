"use client";

import { useCartStore } from "@/store/cart-store";
import { Bookmark, Clock, Eye, ShoppingCart, Star } from "lucide-react";

import Link from "next/link";
import { useState } from "react";

const item = {
	id: "1223",
};

export const ProductCard = () => {
	const { addItem, items } = useCartStore();
	const [open, setOpen] = useState(false);
	const handleCartClick = () => {
		addItem("455544");

		setOpen(true);
	};

	return (
		
			<div className="w-full rounded-md overflow-hidden border border-zinc-300 mb-4 relative">
				<span className="absolute bg-green-500 text-white px-2 rounded-br-sm text-sm ">
					7% off
				</span>
				<span className="absolute right-2 flex flex-col gap-2 top-2 text-white">
					<Bookmark size={20} className="text-zinc-50" fill="white" />
					<Eye size={20} className="bg-" />
				</span>
				<Link href="/products/real-me-dream">
					<img
						src="/images/amori.jpg"
						alt="slige-image"
						className="w-full h-full"
					/>
				</Link>
				<div className="relative">
					<div className="flex flex-col p-2  ">
						<div className="flex items-center gap-1 p-1 text-blue-600 bg-blue-600/10 rounded-sm w-fit">
							<Clock size={16} />
							<p className="text-xs">21 Mins</p>
						</div>
						<Link href="/products/real-me-dream">
							<h1 className="my-1 text-sm mb-2">
								Palekar Tea Time Rusk | Trans Fat free(300g)
							</h1>
						</Link>

						<p className="text-xs flex whitespace-nowrap gap-2 text-zinc-500 pb-2 justify-between">
							<span className="flex">
								{Array.from({ length: 5 }).map((_, i) => (
									<Star key={i} size={16} />
								))}
								(0)
							</span>
							<span>Kilimanjaro iwofe</span>
						</p>

						<div className="flex justify-between">
							<div>
								<p className="text-sm leading-4 ">$29.0</p>
								<p className="text-xs text-zinc-500">$32.0</p>
							</div>
							<div className="bg-blue-500 p-2 text-white rounded-full">
								<ShoppingCart size={18} onClick={handleCartClick} />
							</div>
						</div>
					</div>
				</div>
			</div>
	
	);
};
