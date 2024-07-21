export default defineEventHandler(async (event) => {
  const products: any = await $fetch("https://fakestoreapi.com/products", {
    method: "GET",
  });

  return {
    products,
  };
});
