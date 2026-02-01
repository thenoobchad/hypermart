"use client"

import { LogIn, User } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import AuthModal from '../auth-modal'
import { signOut } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

type UserType = {
  id: string,
  email: string,
}

export const AuthButton = ({session}:{session: UserType }) => {

  const [isActive, setIsActive] = useState(false)
  const handleAuthModal = () => { 
    setIsActive(!isActive)
  }

  return (
    <>
      <button onClick={handleAuthModal}>
        <User size={20} className="md:hidden" />
        <span className="hidden md:flex  gap-2 items-center bg-blue-600/10 text-blue-600 text-sm px-4 py-1 rounded">
          <LogIn size={20} />
          Login
        </span>
      </button>
      {
        isActive && (
          <div className='relative'>
            {session ? (
              <div className="absolute z-90 right-0 top-4 py-1 bg-zinc-50">
                <ul className='flex flex-col gap-2 text-sm'>
                 
                  <li className='px-3 border-b border-zinc-300 py-1'>Dashoard</li>
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
  

  return <li className='px-3 py-1' onClick={handleSignout}>Sign out</li>
}
