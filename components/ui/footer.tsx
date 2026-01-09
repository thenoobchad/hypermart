import { Box, Facebook, Instagram, Leaf, Mail, Phone, Shield, Twitter, Youtube } from "lucide-react";

export default function Footer() {
	return (
		<>
			<footer className="mt-10 py-4 px-4 flex flex-col gap-2 w-full h-full bg-[#151b54] text-white">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div>
						<h1 className="text-white pb-4 text-sm font-bold">Hypermart</h1>
						<p className="text-zinc-100 text-sm">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							rem quaerat dicta fugit obcaecati ipsam eligendi fuga beatae
							asperiores voluptates.
						</p>
						<div className="flex gap-2 my-4 flex-col">
							<div className="flex gap-4 text-sm items-center ">
								<span>
									<Box size={16} className="text-purple-400" />
								</span>
								<p>Wide range of quality products</p>
							</div>
							<div className="flex gap-4 text-sm items-center">
								<span>
									<Shield size={16} className="text-green-400" />
								</span>
								<p>100% secure payments</p>
							</div>
							<div className="flex gap-4 text-sm items-center">
								<span>
									<Leaf size={16} className="text-green-400" />
								</span>
								<p>Trusted by thousands of customers</p>
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-white pb-4">Quick Links</h1>
						<p className="text-zinc-50 text-sm">Order Now</p>
						<p className="text-zinc-50 text-sm">About Us</p>
						<p className="text-zinc-50 text-sm">FAQs</p>
						<p className="text-zinc-50 text-sm">Stores</p>
						<p className="text-zinc-50 text-sm">Delivery Zones</p>
						<p className="text-zinc-50 text-sm">Become a Seller</p>
					</div>
					<div>
						<h1 className="text-white pb-4">Policies</h1>
						<p className="text-zinc-50 text-sm">Privacy Policy</p>
						<p className="text-zinc-50 text-sm">Terms & Conditions</p>
						<p className="text-zinc-50 text-sm">Shipping Policy</p>
						<p className="text-zinc-50 text-sm">Return & Refund Policy</p>
					</div>
					<div className="flex flex-col gap-2">
						<h1>Get In Touch</h1>
						<div className="flex gap-4 text-sm items-center">
							<span className="bg-blue-800/50 p-2 rounded-sm">
								<Phone size={16} className="text-blue-500" />
							</span>
							<p className="flex flex-col">
								Call Us <span className="text-xs">+234 806 815 6622</span>
							</p>
						</div>

						<div className="flex gap-4 text-sm items-center">
							<span className="bg-green-800/50 p-2 rounded-sm">
								<Mail size={17} className="text-green-400" />
							</span>
							<p className="flex flex-col ">
								Email Us <span className="text-xs">+234 806 815 6622</span>
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="w-full border-b border-zinc-600 py-2">
								Follow Us
							</h1>
							<div className="flex gap-4">
								<Facebook className="bg-blue-900 p-1 text-white rounded-full" fill="white"/>
								<Instagram  className="bg-purple-900 p-1 text-white rounded-full" />
								<Youtube className="bg-red-900 p-1 text-white rounded-full"  />
								<Twitter className="bg-gray-900 p-1 text-white rounded-full" fill="white" />
							</div>
						</div>
					</div>
				</div>
			</footer>
			<p className="text-center py-3 border-t bg-blue-950 text-white">
				@{new Date().getFullYear()} Hypermart. All rights reserved
			</p>
		</>
	);
}
