"use client"

import { BarChart3, ChevronDown, Package, ShoppingCart, TrendingUp, Users, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const AsideMenu = ({ sidebarOpen, setSidebar }) => {


  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white backdrop-blur-xl border-r border-slate-200/60 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  bg-indigo-600 rounded-md flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold bg-indigo-600 bg-clip-text text-transparent">
              Hypermart
            </span>
          </div>
          <button
            onClick={() => setSidebar(false)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md  shadow-indigo-200 transition-all"
          >
            <BarChart3 className="w-5 h-5" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"

            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            Orders
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Package className="w-5 h-5" />
            Products
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <Users className="w-5 h-5" />
            Customers
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            Analytics
          </a>
        </nav>

        {/* User Profile */}
        <div className="px-4 py-4 border-t border-slate-200/60">
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-slate-100 rounded-xl cursor-pointer transition-colors">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                John Doe
              </p>
              <p className="text-xs text-slate-500 truncate">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </aside>

  )
}
