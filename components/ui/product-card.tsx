"use client";

import { useCartStore } from "@/store/cart-store";
import { Bookmark, Clock, Eye, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";


import Link from "next/link";
import { useState } from "react";



type ProductType = {
	id: string
	title: string;
	imageUrl: string;
	description: string;
	price: string;
	slug: string;
	stock: number;
	category: string;
}

export const ProductCard = ({ item }: { item: ProductType }) => {
	const { addItem } = useCartStore();
	
	const handleCartClick = (id: string) => {
		addItem(id);
	};

	return (
		<div className="w-full flex flex-col items-center rounded-md overflow-hidden border border-zinc-300 mb-4 relative">
			<span className="absolute bg-green-500 text-white px-2 rounded-br-sm text-sm left-0 z-20">
				7% off
			</span>
			<span className="absolute right-2 flex flex-col gap-2 top-2  p-0.5 rounded-xs">
				{/* <Bookmark size={20} className=""  fill="black" /> */}
				
			</span>
			<Link href={`/products/${item.id}`} className="pt-4">
				<div className="w-40  h-40 flex items-center justify-center relative">
					<Image
						fill
						src={item?.imageUrl}
						alt="slige-image"
						className="w-full  h-full object-cover"
					/>
				</div>
			</Link>
			<div className="relative w-full">
				<div className="flex flex-col p-2  ">
					<div className="flex items-center gap-1 p-1 text-blue-600 bg-blue-600/10 rounded-sm w-fit">
						<Clock size={16} />
						<p className="text-xs">21 Mins</p>
					</div>
					<Link href={`/products/${item.id}`}>
						<h1 className="my-1 text-sm mb-2">{item.title}</h1>
					</Link>

					<p className="text-xs flex whitespace-nowrap gap-2 text-zinc-500 pb-2 justify-between">
						<span className="flex">
							{Array.from({ length: 5 }).map((_, i) => (
								<Star key={i} size={16} />
							))}
							(0)
						</span>
						<span>{item.stock} in stock</span>
					</p>

					<div className="flex justify-between">
						<div>
							<p className="text-sm leading-4 ">${item.price}</p>
							<p className="text-xs text-zinc-500">$32.0</p>
						</div>
						<div className="bg-blue-500 p-2 text-white rounded-full">
							<ShoppingCart
								size={18}
								onClick={() => handleCartClick(item.id)}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
