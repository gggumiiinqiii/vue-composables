<script setup lang="ts">
import { useCart } from "@/composables/useCart";
const { cart, updateQuantity, removeFromItem, isCartEmpty } = useCart();
</script>

<template>
  <div class="about">
    <h1>This is an mycart page</h1>
    <div v-if="isCartEmpty">
      <h1>MYCART IS EMPTY</h1>
    </div>
    <ul v-if="!isCartEmpty">
      <li v-for="item in cart.items" :key="item.productId">
        <div>
          <h3>{{ item.name }}￥{{ item.price }}total:{{ item.quantity }}</h3>
          <el-input-number
            :modelValue="item.quantity"
            @update:modelValue="(quantity:number)=>updateQuantity(item,quantity)"
          ></el-input-number>
          <el-button @click="removeFromItem(item)">remove</el-button>
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
