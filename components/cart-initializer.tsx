"use client"

import { useEffect, useRef } from "react" 
import { useCartStore } from "@/store/cart-store"



export default function CartInitializer({initialItems}: {initialItems: Record<string, number>}) {

const setItems = useCartStore((state) => state.setItems)
    useEffect(() => { 
        setItems(initialItems)
    },[initialItems, setItems])
           
     
  return null
}
 