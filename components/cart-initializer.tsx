"use client"

import { useEffect, useRef } from "react" 
import { useCartStore } from "@/store/cart-store"



export default function CartInitializer({initialItems}: {initialItems: Record<string, number>}) {

    const initialized = useRef(false)

    if (!initialized.current) {
        useCartStore.getState().setItems(initialItems)
        initialized.current = true
        }
     
  return null
}
 