"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import { ProductModal } from "./product-modal";

export const CreateProductBtn = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-100 bg-blue-950 rounded-md transition-colors"
				onClick={() => setIsOpen(true)}>
				<Plus size={18} /> New Product
			</button>
			{isOpen && <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
};
