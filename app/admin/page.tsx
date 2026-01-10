import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";

export default function AdminPage() {
    return (
			<main className="flex flex-col gap-2 w-full h-full">
				<h1>Admin Page</h1>
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

				<section className=" p-4  outline outline-zinc-100 bg-white mx-1 rounded flex flex-col gap-4">
			
					<div className="flex justify-between">
						<div>
							<p className="text-zinc-500 uppercase text-sm">Revenue</p>
							<h4 className="text-3xl ">$8,980.70</h4>
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
							Admin Page{" "}
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
			</main>
		);
}
