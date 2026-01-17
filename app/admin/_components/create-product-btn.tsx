"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import { ProductModal } from "./product-modal";

export const CreateProductBtn = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className="bg-blue-600 my-2 mx-4 text-zinc-50 py-1.5 px-3 rounded items-center flex gap-2 text-sm"
				onClick={() => setIsOpen(true)}>
				<Plus size={18} /> New Product
			</button>
			{isOpen && <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
};
