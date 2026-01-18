
import Header from "./_components/header";
import Footer from "./_components/footer";



export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
