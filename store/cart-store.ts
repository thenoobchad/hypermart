

import { addProductToCart, clearCart, deleteFromCart, removeProductFromCart } from "@/lib/actions";
import { create } from "zustand";
import { persist } from "zustand/middleware";


type CartItems = Record<string, number>

interface CartState {
	items: Promise<CartItems> | CartItems;
	
    setItems: (items: CartItems) => void;
    addItem: (id: string) => void;
	removeItem: (id: string) => void;
	deleteFromCart: (id: string) => void;
    clearCart: () => void;
    isAlertOpen: boolean;
    alertMessage: string;
    setAlert: (open: boolean, message?: string) => void;
}



export const useCartStore = create<CartState>()(
	persist(
		(set) => ({ 
            items: {},
            setItems: (items: CartItems) => set({items}),
            alertMessage: "",
            setAlert: (open, message ="") => set({isAlertOpen: open, alertMessage: message}),
            isAlertOpen: false,
            addItem: async (id) => {
                set((state) => ({
                    items: {
                        ...state.items,
                        [id]: (state.items[id] || 0) + 1,
                    
                    },
                    isAlertOpen: true,
                    alertMessage: "Added to cart!"
                }))

                await addProductToCart(id)
            },
            removeItem: async (id) => {
                set( (state) => {
                    const newItems = { ...state.items }
                    if (newItems[id] > 1) {
                        newItems[id] -= 1;
                       
                    } else {
                        delete newItems[id]
                    }
                    return { items: newItems }
                })
                await removeProductFromCart(id)
               
            },

            deleteFromCart: async (id) => set((state) => {
                const newItems = { ...state.items }
                delete newItems[id]
                
                deleteFromCart(id)
                return { items: newItems }
            }) ,

            clearCart: async () => {
                set({ items: {} })
                await clearCart()
            },
            
		}),
		{ name: "cart-storage" }
	)
);
