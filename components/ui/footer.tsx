import { Box, Facebook, Instagram, Leaf, Mail, Phone, Shield, Twitter, Youtube } from "lucide-react";

export default function Footer() {
	return (
		<>
			<footer className="mt-10 py-4 px-4 flex flex-col gap-2 w-full h-full bg-blue-950 text-white">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div>
						<h1>Hypermart</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
							rem quaerat dicta fugit obcaecati ipsam eligendi fuga beatae
							asperiores voluptates.
						</p>
						<div className="flex gap-2 my-4 flex-col">
							<div className="flex gap-4 text-sm">
								<span>
									<Box />
								</span>
								<p>Wide range of quality products</p>
							</div>
							<div className="flex gap-4 text-sm">
								<span>
									<Shield />
								</span>
								<p>100% secure payments</p>
							</div>
							<div className="flex gap-4 text-sm">
								<span>
									<Leaf />
								</span>
								<p>Trusted by thousands of customers</p>
							</div>
						</div>
					</div>
					<div>
						<h1>Quick Links</h1>
						<p>Order Now</p>
						<p>About Us</p>
						<p>FAQs</p>
						<p>Stores</p>
						<p>Delivery Zones</p>
						<p>Become a Seller</p>
					</div>
					<div>
						<h1>Policies</h1>
						<p>Privacy Policy</p>
						<p>Terms & Conditions</p>
						<p>Shipping Policy</p>
						<p>Return & Refund Policy</p>
					</div>
					<div>
						<h1>Get In Touch</h1>
						<div className="flex gap-4 text-sm">
							<span>
								<Phone />
							</span>
							<p>
								Call Us <span>+234 806 815 6622</span>
							</p>
						</div>

						<div>
							<span>
								<Mail />
							</span>
							<p>
								Call Us <span>+234 806 815 6622</span>
							</p>
						</div>
						<div>
							<h1>Follow Us</h1>
							<div className="flex">
								<Facebook />
								<Instagram />
								<Youtube />
								<Twitter />
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
