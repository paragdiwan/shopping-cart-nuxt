<template>
  <div>
    <header
      class="bg-emerald-600 h-10 flex justify-center space-between items-center p-4 flex-row text-white fixed w-full z-10">
      <p class="mr-3 p-4">Total Price - ${{ cartStore.totalPrice.toFixed(2) }}</p>
      <p>Total Items In Cart: {{ cartStore.products?.length }}</p>
    </header>
    <div class="grid grid-cols-2 h-fit container mx-auto gap-4">

      <div class="mt-10" v-for="product in data.products" :key="product.id">
        <Product :product="product" />
      </div>
    </div>
  </div>


</template>

<script setup>

import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();


const { data } = await useFetch("/products");



</script>

<style scoped></style>