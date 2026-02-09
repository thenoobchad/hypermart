"use client"

import { useEffect, useRef } from "react" 
import { useCartStore } from "@/store/cart-store"



export default function CartInitializer({initialItems}: {initialItems: Record<string, number>}) {


    useEffect(() => { 
        useCartStore.getState().setItems(initialItems)
    },[initialItems])
           
     
  return null
}
 