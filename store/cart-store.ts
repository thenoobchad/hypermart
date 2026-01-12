import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItems = Record<string, number>

interface CartState {
	items: CartItems;
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
            alertMessage: "",
            setAlert: (open, message ="") => set({isAlertOpen: open, alertMessage: message}),
            isAlertOpen: false,
            addItem: (id) => set((state) => ({
                items: {
                    ...state.items,
                    [id]: (state.items[id] || 0) + 1
                },
                isAlertOpen: true,
                alertMessage: "Added to cart!"
            })),
            removeItem: (id) => set((state) => {
                const newItems = { ...state.items }
                if (newItems[id] > 1) {
                    newItems[id] -= 1;
                } else {
                    delete newItems[id]
                }
                return {items: newItems}
            }),

            deleteFromCart: (id) => set((state) => {
                const newItems = { ...state.items }
                delete newItems[id]
                return { items: newItems}
            }) ,

            clearCart: () => set({ items: {} }),
            
		}),
		{ name: "cart-storage" }
	)
);
