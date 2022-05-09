import { computed, ref } from "vue";
const cart = ref({
  items: [] as CartItem[],
});
export const useCart = () => {
  const addToCart = async (product: Product) => {
    const item = cart.value.items.find((item) => item.productId === product.id);
    console.log(item);
    if (item) {
      updateQuantity(item, item.quantity + 1);
    } else {
      cart.value.items.push({
        productId: product.id,
        quantity: 1,
        name: product.name,
        price: product.price,
      });
    }
  };
  const updateQuantity = async (item: CartItem, quantity: number) => {
    item.quantity = quantity;
  };
  const removeFromItem = async (item: CartItem) => {
    const index = cart.value.items.findIndex(
      (cartItem) => cartItem.productId === item.productId
    );
    if (index > -1) {
      cart.value.items.splice(index, 1);
    }
  };
  const isCartEmpty = computed(() => {
    return cart.value.items.length === 0;
  });
  const totalProducts = computed(() => {
    return cart.value.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  });
  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromItem,
    totalProducts,
    isCartEmpty,
  };
};
