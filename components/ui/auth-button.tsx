"use client"

import { BookDashed, ChevronDown, LayoutDashboard, LogIn, LogOut, User } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import AuthModal from '../auth-modal'
import { signOut, useSession } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


type UserType= {
  id: string,
  email: string,
  role: string
}

type SessionType = {
  user: UserType
}

export const AuthButton = ({session}:{session: SessionType }) => {

  const [isActive, setIsActive] = useState(false)
  const handleAuthModal = () => { 
    setIsActive(!isActive)
  }
  let href: string

 

  if (session?.user?.role === "ADMIN") {
    href = "/admin"
  } else {
    href = "/dashboard"
  }

  return (
    <>
      <button onClick={handleAuthModal}>
        <LogIn size={16} className='flex md:hidden'/>
        { !session ? <span className="hidden md:flex  gap-2 items-center bg-blue-600/10 text-blue-600 text-sm px-4 py-1 rounded">
          <LogIn size={20} />
          
          Login
        </span> : (
            <User size={20} className="hidden md:block" />
        )}
      </button>
      {
        isActive && (
          <div className='relative'>
            {session ? (
              <div className="absolute z-90 right-0 top-4 py-1 bg-zinc-50">
                <ul className='flex flex-col gap-2 text-sm'>
                 
                  <Link href={href} className='px-3 border-b border-zinc-300 py-1 cursor-pointer flex items-center gap-2 justify-between'>Dashboard <LayoutDashboard size={16}/></Link>
                  <SignOut setIsActive={setIsActive} />
                </ul>
              </div>
            ) : (
                <div className="fixed z-90 left-0 top-0">
              <AuthModal isActive={isActive} setActive={setIsActive} />
            </div>
            )}
          </div>
        )
      }
    </>
  )

}

const SignOut = ({ setIsActive }: { setIsActive: Dispatch<SetStateAction<boolean>>}) => {

  const router = useRouter()
  const handleSignout = async () => {
    await signOut({}, {
      onSuccess: () => {
        setIsActive(false)
        router.refresh()
       }
    })
  }
  

  return <li className='px-3 py-1 cursor-pointer flex gap-2 justify-between' onClick={handleSignout}>Sign out <LogOut size={16}/></li>
}
