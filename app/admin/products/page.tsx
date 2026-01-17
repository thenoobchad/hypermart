
import {
	Edit,
	File,
	
	Package,
	Plus,
	Trash,
	Upload,
	
	X,
} from "lucide-react";

import { fetchAllProducts } from "@/lib/query";
import { ProductModal } from "../_components/product-modal";
import { CreateProductBtn } from "../_components/create-product-btn";
import { DeleteBtn } from "../_components/deletebtn";
import { EditBtn } from "../_components/editbtn";





export default async function ProductsPage() {
	
	 const allProducts = await fetchAllProducts() ;
	return (
		<section className="h-full w-full">
			
			<div className="mx-4">
				{/* DISPLAY ALL PRODUCTS HERE */}
				<div className="flex w-full justify-between items-center">
					<h4 className="flex items-center gap-2">
						<Package size={18} />  Products
					</h4>
					<CreateProductBtn />
				</div>

				<div className="w-full h-full items-center justify-center py-4 flex">
					{allProducts.length > 0 ? (
						<table className="w-full border-collapse ">
							<thead>
								<tr className="border-zinc-200 text-sm">
									<td className=" p-2">Product</td>
									<td className=" p-2">Description</td>
									<td className=" p-2">Price</td>
								<td className=" p-2">Stock</td>
								<td className=" p-2">Actions</td>
							</tr>
						</thead>
						<tbody>
							{allProducts.map((product) => (
									<tr
										key={product.id}
										className="border-t border-zinc-200 text-sm text-zinc-700">
										<td className=" p-2">{product.title}</td>
										<td className=" p-2">{product.category}</td>
										<td className=" p-2">{product.price}</td>
										<td className=" p-2">{product.stock}</td>
									<td className=" p-2 flex gap-4">
										<DeleteBtn productId={product.id} />
										<EditBtn productId={product.id} />
									</td>
									
									</tr>
								))
							}
						</tbody>
					</table> ): (
								<p>Nothing to see here </p>
							)}
				</div>
			</div>
		</section>
	);
}

