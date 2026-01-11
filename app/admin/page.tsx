"use client";

import { Bike, Boxes, Calendar, ChevronDown, Divide, ShoppingBasket, ShoppingCart, Store, TrendingDown, TrendingUp } from "lucide-react";
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
	const dataArray = Array.from({ length: 20 }).map((_, i) => i)
	const dataArray2 = Array.from({ length: 20 }).map((_, i) => i);
	const data = {
		labels: dataArray,
		datasets: [
			{
				data: [
					0, 10, 0, 0, 4,  0, 15,0, 0, 0, 0, 4,0, 0, 1, 9,
					0,0, 8,0,0,0,0
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

	const data2 = {
		labels: dataArray,
		datasets: [
			{
				data: [0, 0, 0, 0, 4, 0, 15, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0],
				borderColor: "#c61a09",
				backgroundColor: "#c61a09",
				borderWidth: 2,
				pointRadius: 0,
				fill: true,
				stepped: true,
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

	const products = Array.from({ length: 5 })
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
					<div className="flex py-2 items-start">
						<ProgressBar progress={(120 / 911) * 100} />
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

					<div className="w-full h-12.5 flex justify-center">
						<Line data={data} options={options} width={100} height={100} />
					</div>
				</div>
			</section>

			<section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-5 w-full">
					<div>
						<p className="text-zinc-500 uppercase text-sm">
							New user regisrations
						</p>
						<div className="flex  gap-2 items-end">
							<h4 className="text-3xl ">24 </h4>
							<span className="flex items-center gap-1 text-green-500 text-sm">
								31 Days <Calendar size={16} />
							</span>
						</div>
					</div>

					<div className="w-full h-[50px] ">
						<Line data={data2} options={options} width={100} height={100} />
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

			<section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4 w-full">
				<div className="flex flex-col gap-5 w-full">
					<div className="flex gap-4">
						<p className="text-zinc-800 capitalize text-sm">
							Top selling products
						</p>
						<div className="flex  items-start">
							<div className="flex items-center gap-2 text-zinc-500  text-sm">
								<p>Last 30 days</p>
								<ChevronDown size={16} />
							</div>
						</div>
					</div>
					<div className="flex flex-col  justify-center">
						{products.map((_, i) => {
							return (
								<div key={i} className={`flex py-4 gap-4 items-center  ${products.length - 1 === i ? "" : "border-b border-zinc-700/10"}`}>
									<span className="text-blue-600 bg-blue-600/10 w-6 h-6 flex items-center justify-center rounded">
										{i + 1}
									</span>
									<div className="flex gap-4 items-center">
										<div className="h-10 w-10 bg-black"/>
										<div className="flex flex-col">
											<h4>Organic Carrots</h4>
											<p className="text-sm text-zinc-500">
												Vegetable & fruits
											</p>
											<span className="text-xs text-zinc-500">3 sold</span>
										</div>
									</div>
									<p className="ml-auto">$1,456.00</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}


const ProgressBar = ({ progress }: { progress: number }) => {
	return (
		<div className="relative w-full h-2 bg-zinc-200 rounded">
			<div
				className=" h-full bg-blue-600 rounded"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};