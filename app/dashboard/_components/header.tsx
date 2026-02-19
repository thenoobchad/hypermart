"use client"

import { ulid } from 'better-auth/*';
import { Bell, Menu, Search } from 'lucide-react';
import React, { useState } from 'react'

export const Header = ({ setSidebar }) => {
    const [isOpenMessage, setIsOpenMessage] = useState(false)
const [msgArr, setMsgArr] = useState(messages)
    

    const handleViewed = (id: string) => {
      
        const newArr = [...msgArr]
        for (const msg of newArr){
            if (msg.id === id) {
                msg.isOpen = true
                setMsgArr(newArr)
            } else {
                msg.isOpen = false
                setMsgArr(newArr)
            }
        }
    }

    console.log(msgArr)
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
                        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
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
                        {!isOpenMessage && <ul className='absolute min-w-50 max-h-40  -left-40 top-10 overflow-auto bg-white  outline-slate-200 outline rounded-lg text-xs flex text-justify flex-col'>
                            
                          
                            {msgArr.map(msg => (
                                <li onClick={() => handleViewed(msg.id)} className='px-5 py-4  hover:bg-slate-100'>{(msg.content).slice(1, msg.isOpen === true ? 500 : 30)}{msg.isOpen === true ? "" : "..."}</li>
                            ))}
                        </ul>}
                    </div>
                </div>
            </div>
        </header>
    )
}

const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci esse facere fugit quod ratione beatae eos facilis laudantium necessitatibus autem! Accusantium consectetur odio, aut eveniet veniam ducimus facere."

const MessageItem = () => {
    const [isViewed, setIsViewed] = useState(false)

    const handleViewed = () => {
        setIsViewed(prev => !prev)
    }
    return (
        <li onClick={handleViewed} className='px-5 py-4  hover:bg-slate-100 '>{text.slice(1, isViewed ? 500 : 20)}</li>
    )
}
const messages = [
    {
        id: "1",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt? Consectetur blanditiis cumque esse dignissimos assumenda sint totam! Corporis, nam.",
        isRead: false,
        isOpen: false,
    },
    {
        id: "2",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt? Consectetur blanditiis cumque esse dignissimos assumenda sint totam! Corporis, nam.",
        isRead: false,
        isOpen: false,
    },
    {
        id: "3",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas repudiandae inventore facere magni ea quos.",
        isRead: false,
        isOpen: false,
    }
]