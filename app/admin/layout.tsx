
import Header from "./_components/header";
import Footer from "./_components/footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";




export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	
	const session = await auth.api.getSession({
		headers: await headers()
	})
	
	
	return (
		<div className="bg-zinc-50 w-full flex flex-col overflow-hidden ">
			<div className="w-full h-full">
				<Header />
				<div className="flex ">{children}</div>
				<Footer />
			</div>
		</div>
	);
}
