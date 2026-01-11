"use client";

import { Bike, Boxes, Calendar, ChevronDown, ShoppingBasket, ShoppingCart, Store, TrendingDown, TrendingUp } from "lucide-react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

export default function AdminPage() {
	const data = {
		labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
		datasets: [
			{
				data: [
					0, 10, 0, 0, 4,  0, 15,0, 0, 0, 0, 4,0, 0, 1, 9,
					0,0, 8,
				],
				borderColor: "#3b82f6",
				backgroundColor: "rgba(59, 130, 246, 0.1)",
				borderWidth: 2,
				pointRadius: 0,
				fill: true,
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: { display: false },
			y: { display: false, min: 0},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
	};
	return (
		<main className="flex w-full mx-auto flex-col gap-2 h-full">
			
			<section className=" p-4 outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4">
				<p>Welcome Back, Hyperadmin.</p>
				<div className="flex justify-between">
					<div>
						<p className="text-zinc-500 uppercase text-sm">Sales</p>
						<h4 className="text-3xl ">0.9%</h4>
					</div>
					<div className="flex  items-start">
						<div className="flex items-center gap-2 text-zinc-500  text-sm">
							<p>Last 30 days</p>
							<ChevronDown size={16} />
						</div>
					</div>
				</div>

				<div className="flex justify-between">
					<div>
						<p className="text-zinc-500  text-sm">Conversion rate</p>
					</div>
					<div className="flex  items-start">
						<div className="flex items-center gap-2 text-zinc-500  text-sm">
							<p>94.46</p>
							<TrendingDown size={16} className="text-red-500" />
							<TrendingUp className="hidden" size={16} />
						</div>
					</div>
				</div>

				<div className="flex flex-col">
					<div>
						<p className="text-zinc-400  text-sm">
							8 delivered out of total orders 911
						</p>
					</div>
					<div className="flex  items-start">Progress bar here</div>
				</div>
			</section>

			<section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-5 w-full">
					<div>
						<p className="text-zinc-500 uppercase text-sm">Revenue</p>
						<div className="flex  gap-2 items-end">
							<h4 className="text-3xl ">$8,980.70 </h4>
							<span className="flex items-center gap-1 text-green-500 text-sm">
								31 Days <Calendar size={16} />
							</span>
						</div>
					</div>

					<div className="w-full h-[50px] flex justify-center">
						<Line data={data} options={options}  width={100} height={100} />
					</div>
				</div>
			</section>

			<section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-5 w-full">
					<div>
						<p className="text-zinc-500 uppercase text-sm">Revenue</p>
						<div className="flex  gap-2 items-end">
							<h4 className="text-3xl ">$8,980.70 </h4>
							<span className="flex items-center gap-1 text-green-500 text-sm">
								31 Days <Calendar size={16} />
							</span>
						</div>
					</div>

					<div className="w-full h-[50px] ">
						<Line data={data} options={options} width={100} height={100} />
					</div>
				</div>
			</section>

			{/* Stats boxes */}

			<div className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex gap-5 w-full">
					<span className="bg-blue-600 w-fit p-2 rounded text-zinc-50 text-sm">
						<Store className=" text-zinc-50 " />
					</span>
					<div className="flex flex-col justify-center">
						<p className="leading-3">12 Sellers</p>
						<p className="text-zinc-500">Active Stores</p>
					</div>
				</div>
			</div>
			<div className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex gap-5 w-full">
					<span className="bg-green-600 w-fit p-2 rounded text-zinc-50 text-sm">
						<ShoppingCart className=" text-zinc-50 " />
					</span>
					<div className="flex flex-col justify-center">
						<p className="leading-3">686 Orders</p>
						<p className="text-zinc-500">75 Delivered</p>
					</div>
				</div>
			</div>

			<div className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex gap-5 w-full">
					<span className="bg-yellow-600 w-fit p-2 rounded text-zinc-50 text-sm">
						<Boxes className=" text-zinc-50 " />
					</span>
					<div className="flex flex-col justify-center">
						<p className="leading-3">50 Products</p>
						<p className="text-zinc-500">55 Total Sales</p>
					</div>
				</div>
			</div>
		</main>
	);
}
