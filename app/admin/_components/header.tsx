"use client"

import { Bell, Menu, Search } from 'lucide-react';
import React, { useState } from 'react'

export const Header = ({setSidebar}) => {
	const [isOpenMessage, setIsOpenMessage] = useState(false)
  return (
	  <header className="sticky top-0 z-40 bg-white backdrop-blur-xl border-b border-slate-200/60">
		  <div className="flex items-center justify-between px-6 py-4">
			  <div className="flex items-center gap-4">
				  <button
					  onClick={() => setSidebar(true)}
					  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
				  >
					  <Menu className="w-5 h-5" />
				  </button>
				  <div>
					  <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
					  <p className="text-sm text-slate-500">
						  Welcome back! Here's your overview
					  </p>
				  </div>
			  </div>

			  <div className="flex items-center gap-3">
				  {/* Search */}
				  <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-md">
					  <Search className="w-4 h-6 text-slate-400" />
					  <input
						  type="text"
						  placeholder="Search..."
						  className="bg-transparent border-none outline-none text-sm text-slate-600 placeholder:text-slate-400 w-48"
					  />
				  </div>

				  {/* Notifications */}
				  <div className='relative'>
								   <button onClick={() => setIsOpenMessage(!isOpenMessage)} className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
									   <Bell className="w-5 h-5 text-slate-600" />
									   
									   <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
								   </button>
								   {!isOpenMessage && <ul className='absolute -left-20 top-10 bg-white  outline-slate-200 outline rounded-lg text-sm'>
									   <li className='px-5 py-4 whitespace-nowrap hover:bg-slate-100'>New message</li>
										   <li className='px-5 py-4 whitespace-nowrap hover:bg-slate-100'>Old message</li>
									   </ul>}
								   </div> 
			  </div>
		  </div>
	  </header>
  )
}
