"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export default function ProductsPage({}) {

const pathname = usePathname
  return (
		<section className="h-full ">
		<Breadcrumbs/>
		</section>
	);
}
