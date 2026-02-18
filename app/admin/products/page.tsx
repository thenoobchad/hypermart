export const dynamic = 'force-dynamic';

import {

	Package,
	
} from "lucide-react";

import { fetchAllProducts } from "@/lib/query";

import { CreateProductBtn } from "../_components/create-product-btn";
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
			
			<div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
				{/* DISPLAY ALL PRODUCTS HERE */}
				<div className="flex w-full justify-between items-">
					
					<h4 className="text-2xl font-bold text-slate-900">
						Products
					</h4>
					
					
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
										<td className=" p-2"><div className="relative w-20 h-10"><Image fill src={product.imageUrl} alt={product.title} className="object-cover rounded" /></div></td>
									<td className=" p-2">
										<div className="flex flex-col">
											<p className="truncate max-w-20">{product.description}</p><p className="text-blue-600 text-xs ">{product.category}</p>
										
										</div></td>
										<td className=" p-2">{product.price}</td>
										<td className=" p-2">{product.stock}</td>
									<td className=" p-2 flex  gap-4">
										<div className="flex gap-4 p-2">
										<DeleteBtn productId={product.id} />
										<EditBtn product={product} />
											</div>
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

			<div className="bg-white/80  backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-xl font-bold text-slate-900">
						Recent Orders
					</h2>
					<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
						View all
					</button>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="border-b border-slate-200">
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Order ID
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Customer
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Product
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Amount
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Status
								</th>
								<th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">
									Date
								</th>
							</tr>
						</thead>
						<tbody>
							{recentOrders.map((order, index) => (
								<tr
									key={index}
									className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
								>
									<td className="py-4 px-4 text-sm font-medium text-slate-900">
										{order.id}
									</td>
									<td className="py-4 px-4 text-sm text-slate-600">
										{order.customer}
									</td>
									<td className="py-4 px-4 text-sm text-slate-600">
										{order.product}
									</td>
									<td className="py-4 px-4 text-sm font-semibold text-slate-900">
										{order.amount}
									</td>
									<td className="py-4 px-4">
										<span
											className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${order.status === 'Completed'
												? 'bg-emerald-100 text-emerald-700'
												: order.status === 'Processing'
													? 'bg-blue-100 text-blue-700'
													: order.status === 'Shipped'
														? 'bg-purple-100 text-purple-700'
														: 'bg-red-100 text-red-700'
												}`}
										>
											{order.status}
										</span>
									</td>
									<td className="py-4 px-4 text-sm text-slate-500">
										{order.date}
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

