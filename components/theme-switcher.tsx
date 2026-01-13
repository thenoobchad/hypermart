"use client"

import { Moon, Sun, SunDim } from "lucide-react"
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()
  return (
		<div onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')}>
          {theme === 'dark' ? (<Sun size={20} className="hidden md:flex text-yellow-500" fill="yellow" />) :
			<Moon size={18} fill="black" className="hidden md:flex " />}
		</div>
	);
}
