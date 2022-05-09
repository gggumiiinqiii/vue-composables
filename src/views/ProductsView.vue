<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useCart } from "@/composables/useCart";
const { addToCart } = useCart();
const products = ref<Product[]>([]);
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
    },
  ];
  console.log(products.value);
});
</script>

<template>
  <div class="about">
    <h1>This is an ProductsView</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div>
          <h3>{{ product.name }}|price:{{ product.price }}</h3>
          <el-button @click="addToCart(product)">addToCard</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
