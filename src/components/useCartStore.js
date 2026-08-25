import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [], 
      toggleCartItem: (product) => 
        set((state) => {
          const exists = state.cart.some((item) => item.id === product.id)
          if (exists) {
            return { cart: state.cart.filter((item) => item.id !== product.id) }
          } else {
            return { cart: [...state.cart, product] }
          }
        }),
    }),
    { name: 'shopping-cart' }
  )
)