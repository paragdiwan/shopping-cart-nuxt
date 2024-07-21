import { defineStore } from "pinia";

interface Product {
  sku: string;
  name: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
    },

    removeProduct(product: Product) {
      this.products = this.products.filter((p) => p.sku !== product.sku);
    },
  },
  getters: {
    totalPrice: (state) => {
      if (state.products.length > 0) {
        return state.products.reduce((total, product) => {
          return (total += product.price * 1);
        }, 0);
      } else {
        return 0;
      }
    },
  },
});

export type CartStore = ReturnType<typeof useCartStore>;
