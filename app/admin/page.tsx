"use client"

import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { Header } from './_components/header';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
	{
	  title: 'Total Revenue',
	  value: '$45,231.89',
	  change: '+20.1%',
	  trend: 'up',
	  icon: DollarSign,
	  color: 'bg-teal-600',
	},
	{
	  title: 'Total Orders',
	  value: '2,345',
	  change: '+15.3%',
	  trend: 'up',
	  icon: ShoppingCart,
	  color: 'bg-indigo-600',
	},
	{
	  title: 'Active Users',
	  value: '1,234',
	  change: '-4.2%',
	  trend: 'down',
	  icon: Users,
	  color: 'bg-pink-600',
	},
	{
	  title: 'Products Sold',
	  value: '456',
	  change: '+12.5%',
	  trend: 'up',
	  icon: Package,
	  color: 'bg-red-600',
	},
  ];

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

  const salesData = [
	{ month: 'Jan', value: 65 },
	{ month: 'Feb', value: 78 },
	{ month: 'Mar', value: 90 },
	{ month: 'Apr', value: 81 },
	{ month: 'May', value: 95 },
	{ month: 'Jun', value: 87 },
  ];

  const maxValue = Math.max(...salesData.map((d) => d.value));

  return (
	<div>
	
		<main className="p-6 space-y-6">
		  {/* Stats Grid */}
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{stats.map((stat, index) => {
			  const Icon = stat.icon;
			  return (
				<div
				  key={index}
				  className=" relative bg-white/80 backdrop-blur-sm rounded-xl p-4"
				  
				>
				  <div className="flex items-start justify-between mb-4">
					<div
					  className={`w-12 h-12  ${stat.color} rounded-lg flex items-center justify-center shadow-sm`}
					>
					  <Icon className="w-6 h-6 text-white" />
					</div>
					<div
					  className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${stat.trend === 'up'
						  ? 'bg-emerald-100 text-emerald-700'
						  : 'bg-red-100 text-red-700'
						}`}
					>
					  {stat.trend === 'up' ? (
						<ArrowUpRight className="w-3 h-3" />
					  ) : (
						<ArrowDownRight className="w-3 h-3" />
					  )}
					  {stat.change}
					</div>
				  </div>
				  <h3 className="text-2xl font-bold text-slate-900 mb-1">
					{stat.value}
				  </h3>
				  <p className="text-sm text-slate-500">{stat.title}</p>
				</div>
			  );
			})}
		  </div>

		  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			{/* Sales Chart */}
			<div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
			  <div className="flex items-center justify-between mb-6">
				<div>
				  <h2 className="text-xl font-bold text-slate-900">
					Sales Overview
				  </h2>
				  <p className="text-sm text-slate-500">
					Monthly revenue trends
				  </p>
				</div>
				<button className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors">
				  Last 6 months
				</button>
			  </div>

			  <div className="flex items-end justify-between h-64 gap-4">
				{salesData.map((item, index) => (
				  <div key={index} className="flex-1 flex flex-col items-center">
					<div className="w-full flex items-end h-48 mb-3">
					  <div
						className="w-full rounded-t-lg bg-indigo-600  cursor-pointer relative group"
						style={{
						  height: `${(item.value / maxValue) * 100}%`,
						  animation: `growUp 1s ease-out ${index * 0.1}s both`,
						}}
					  >
						<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded">
						  ${item.value}k
						</div>
					  </div>
					</div>
					<span className="text-sm font-medium text-slate-600">
					  {item.month}
					</span>
				  </div>
				))}
			  </div>
			</div>

			{/* Top Products */}
			<div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
			  <h2 className="text-xl font-bold text-slate-900 mb-6">
				Top Products
			  </h2>
			  <div className="space-y-4">
				{[
				  {
					name: 'Wireless Headphones',
					sales: 1234,
					color: 'from-blue-500 to-indigo-600',
				  },
				  {
					name: 'Smart Watch',
					sales: 987,
					color: 'from-purple-500 to-pink-600',
				  },
				  {
					name: 'Laptop Stand',
					sales: 756,
					color: 'from-emerald-500 to-teal-600',
				  },
				  {
					name: 'USB-C Hub',
					sales: 543,
					color: 'from-orange-500 to-red-600',
				  },
				].map((product, index) => (
				  <div key={index} className="space-y-2">
					<div className="flex items-center justify-between">
					  <span className="text-sm font-medium text-slate-700">
						{product.name}
					  </span>
					  <span className="text-sm font-bold text-slate-900">
						{product.sales}
					  </span>
					</div>
					<div className="h-2 bg-slate-100 rounded-full overflow-hidden">
					  <div
						className={`h-full bg-gradient-to-r ${product.color} rounded-full transition-all duration-1000`}
						style={{
						  width: `${(product.sales / 1234) * 100}%`,
						  animation: `expandWidth 1s ease-out ${index * 0.1}s both`,
						}}
					  ></div>
					</div>
				  </div>
				))}
			  </div>
			</div>
		  </div>

		  {/* Recent Orders */}
		  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/60">
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
		</main>
	  {/* Overlay for mobile sidebar */}
	  {sidebarOpen && (
		<div
		  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
		  onClick={() => setSidebarOpen(false)}
		></div>
	  )}

	  <style jsx>{`
		@keyframes fadeInUp {
		  from {
			opacity: 0;
			transform: translateY(20px);
		  }
		  to {
			opacity: 1;
			transform: translateY(0);
		  }
		}

		@keyframes growUp {
		  from {
			transform: scaleY(0);
			transform-origin: bottom;
		  }
		  to {
			transform: scaleY(1);
			transform-origin: bottom;
		  }
		}

		@keyframes expandWidth {
		  from {
			width: 0;
		  }
		}
	  `}</style>
	</div>
  );
}