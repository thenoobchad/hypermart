"use client";

import { useCartStore } from "@/store/cart-store";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";
import { useState } from "react";

export const CartBadge = () => {
	const { items } = useCartStore();

	const [isOpen, setIsOpen] = useState(false)
	const totalItems = items ? Object.values(items).reduce((a,b) => a+b, 0): 0
	return (
		<>
			<div className="cursor-pointer relative" onClick={() => setIsOpen(true)}>
				<ShoppingCart size={20} className=" md:flex" fill="black" />
				{items && totalItems > 0 && (
					<div className="absolute -top-1.5 -right-1.5 bg-red-600 h-4 w-4 flex items-center justify-center rounded-full text-white text-xs">
						{totalItems}
					</div>
				)}
			</div>
			<div className={`w-screen z-80  backdrop-blur-xs right-0 top-0 fixed h-dvh flex justify-end transition-all delay-150 ${!isOpen ? 'translate-x-full' : 'translate-x-0'}`}>
				<div className="flex bg-white right-0 relative  z-99 w-[80dvw] sm:w-[60dvw] md:w-[40dvw] lg:w-[30dvw] p-4 flex-col gap-4">
					<div className="flex justify-between w-full items-start">
						<div>
							<h4 className="text-lg">Cart</h4>
							<p>Please login to continue</p>
						</div>
						<button onClick={() => setIsOpen(false)} className="cursor-pointer">
							<X />
						</button>
					</div>
					<div className="flex gap-2 w-full  p-3 border border-zinc-200 rounded">
						{/* Image */}
						<span>
							<div className="h-14 w-16 bg-black rounded" />
						</span>
						{/*  */}
						<div className="flex-1">
							{/* title & trash */}
							<div className="flex justify-between">
								<h4 className="truncate max-w-60 text-lg">
									Bianca 100% Rusk | Tran with many way on it
								</h4>
								<Trash size={18} />
							</div>

							{/* desc & Qty */}

							<div className="flex flex-col text-sm text-zinc-600">
								<p className="leading-3 mt-1">Amits Grocery Hub</p>
								<div className="flex justify-between">
									{" "}
									<p>Qty: 1 Stock: 6544 available</p> <p>$56.00/ item</p>
								</div>
							</div>

							{/* Btns and price */}
							<div className="flex justify-between">
								<div className="flex gap-2">
									<button>
										<Minus size={18} />
									</button>
									<span>1</span>
									<button>
										<Plus size={18} />
									</button>
								</div>
								<span>$56.00</span>
							</div>
						</div>
					</div>

					<div className="flex  w-full  p-3 border border-zinc-200 rounded flex-col text-sm gap-2">
						<div className="justify-between flex w-full">
							<h4>Items Total</h4>
							<h4>$ 656.00</h4>
						</div>
						<div className="justify-between flex w-full">
							<p>items</p>
							<p>2</p>
						</div>
					</div>

					<button className="bg-blue-600 py-1.5 text-white rounded mt-auto">Please login to continue</button>
				</div>
			</div>
		</>
	);
};
