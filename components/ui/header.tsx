
import {
	ChevronDown,
	Clipboard,

	LocateIcon,

	Menu,
	Search
} from "lucide-react";


import { CartBadge } from "./cart-badge";

import Link from "next/link";

import { SearchInput } from "./search-input";
import { AuthButton } from "./auth-button";
import { getSession } from "@/lib/auth";


export const Header = async () => {
	const session = await getSession()
	return (
		<>
			<header className=" p-4 flex flex-col gap-2 w-full">
				<div className="grid grid-cols-2 w-full">
					<div className="flex flex-col gap-2 md:flex-row justify-center md:justify-start">
						<div className="flex gap-4 items-center">
							<Menu className="md:hidden" />
							<Link href="/">Hyper</Link>
						</div>
						<div className="flex gap-2 items-center justify-start">
							<LocateIcon size={20} />
							<p className="text-sm">Port Harcourt, Rivers</p>
							<ChevronDown size={20} />
						</div>
					</div>
					<div className="flex flex-col md:flex-row-reverse items-end gap-2 justify-center  md:items-center">
						<div className="flex gap-4 items-center">
							{session && <p className="text-sm text-zinc-500">{session?.user?.email}</p>}
							<CartBadge />
							<AuthButton session={session?.user} />
						</div>
						<div className="flex-1 w-full">
							<div className="text-sm flex items-center justify-between w-full  p-2 bg-zinc-100 rounded-sm">
								<div className="flex items-center gap-6 overflow-hidden h-5">
									<Search size={20} />
									<SearchInput />
								</div>
								<Clipboard size={20} />
							</div>
						</div>
					</div>
				</div>

				{/* <Breadcrumbs /> */}
			</header>

		</>
	);
};
