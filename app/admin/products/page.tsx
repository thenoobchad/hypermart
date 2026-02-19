export const dynamic = 'force-dynamic';

import {

	Package,
	
} from "lucide-react";

import { fetchAllProducts } from "@/lib/query";


import { DeleteBtn } from "../_components/deletebtn";
import { EditBtn } from "../_components/editbtn";
import Image from "next/image";

const recentOrders = [
	{
		id: '#3456',
		customer: 'John Cooper',
		product: 'Wireless Headphones',
		amount: '$299.00',
		status: 'Completed',
		date: '2 hours ago',
	},
	{
		id: '#3455',
		customer: 'Sarah Johnson',
		product: 'Smart Watch Pro',
		amount: '$599.00',
		status: 'Processing',
		date: '5 hours ago',
	},
	{
		id: '#3454',
		customer: 'Michael Chen',
		product: 'Laptop Stand',
		amount: '$89.00',
		status: 'Shipped',
		date: '1 day ago',
	},
	{
		id: '#3453',
		customer: 'Emma Williams',
		product: 'USB-C Hub',
		amount: '$49.00',
		status: 'Completed',
		date: '2 days ago',
	},
	{
		id: '#3452',
		customer: 'David Brown',
		product: 'Mechanical Keyboard',
		amount: '$159.00',
		status: 'Cancelled',
		date: '3 days ago',
	},
];

export default async function ProductsPage() {
	
	const allProducts = await fetchAllProducts();
	
	return (
		<section className="p-6 space-y-6 ">
			
			

			<div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-bold text-slate-900">
						Products
					</h2>
					<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
						View all
					</button>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-slate-200">
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase whitespace-nowrap">
									S/N
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Image
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Product
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Description
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Price
								</th>
								
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									action
								</th>
							</tr>
						</thead>
						<tbody>
							{allProducts.length > 0 && allProducts.map((product, index) => (
								<tr
									key={index}
									className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
								>
								
									<td className="py-4 px-4 text-sm font-medium text-slate-900">
										{index + 1}
									</td>
									<td className="py-4 px-4 text-sm font-medium text-slate-900">
										<div className="w-10 h-10 relative">
											<Image src={`${product.imageUrl}`} alt="image" fill />
										</div>
									</td>
									<td className="py-4 px-4 text-sm text-slate-600">
										{product.title}
									</td>
									<td className="py-4 px-4 text-sm text-slate-600">
										{product.description}
									</td>
									<td className="py-4 px-4 text-sm font-semibold text-slate-900">
										${product.price}
									</td>
									
									<td className="py-4 px-4 text-sm  text-slate-500">
										<div className="flex gap-2 justify-start"><DeleteBtn productId={product.id} />
											<EditBtn product={product}/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}

