<template>
    <div
        class="card m-2 flex flex-row gap-2 border-solid border-1 border-green-600 rounded-lg p-2 shadow outline-lg border-1">
        <div class="mt-4">
            <img class="rounded-lg" width="200" :src="product?.image" alt="{{product.title}}" />
        </div>
        <div class="ml-2 bg-slate-200 p-4">
            <p class="product-title text-xl mb-2 min-h-5">
                {{ product?.title }}
            </p>

            <p class="text-sm mb-2">
                {{ product?.description?.substr(0, 100) }}
            </p>

            <p class="text-3xl mb-3">${{ product?.price }}</p>

            <button @click="cartStore.addProduct(product)"
                class="btn rounded-xl p-3 bg-emerald-800 text-white hover:bg-emerald-950">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true,
    },
});

import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
</script>

<style lang="scss" scoped></style>
