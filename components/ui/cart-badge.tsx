"use client";

import { useCartStore } from "@/store/cart-store";
import { ShoppingCart } from "lucide-react";

export const CartBadge = () => {
	const { items } = useCartStore();
	const totalItems = items ? Object.values(items).reduce((a,b) => a+b, 0): 0
	return (
		<div className="relative">
			<ShoppingCart size={20} className=" md:flex" fill="black" />
			{ items && totalItems > 0 && (
				<div className="absolute -top-1.5 -right-1.5 bg-red-600 h-4 w-4 flex items-center justify-center rounded-full text-white text-xs">
					{totalItems}
				</div>
			)}
		</div>
	);
};
