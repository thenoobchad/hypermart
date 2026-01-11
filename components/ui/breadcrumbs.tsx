"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Span } from "next/dist/trace";
import { ChevronRight } from "lucide-react";
import React from "react";

export const Breadcrumbs = () => {
	const paths = usePathname();
	const pathNames = paths.split("/").filter((path) => path);
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<Link href="/">Home</Link>
				</li>
				{pathNames.length > 0 && <span>/</span>}

				{pathNames.map((link, i) => {
					const href = `/${pathNames.slice(0, i + 1).join("/")}`;
					const itemLink = link[0].toUpperCase() + link.slice(1);
					const isLast = i === pathNames.length - 1;

					return (
                        <React.Fragment key={i} >
                            <li>
                                <ChevronRight />
                            </li>
							<li>
								{isLast ? (
									<span>{itemLink}</span>
								) : (
									<Link href={href}>{itemLink}</Link>
								)}
							</li>
							
						</React.Fragment>
					);
				})}
			</ul>
		</nav>
	);
};
