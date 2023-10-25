import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref<any[]>([])
  const addCart = (val:any) => {
    cart.value.push(val)
  }
  const clearMe = () => {
    while(cart.value.length > 0){
      cart.value.pop()
    }
  }
  return { addCart, cart, clearMe }
})
