export const addToCartAction = (product_id) => {
  console.log(product_id);
  return {
    type: 'ADD_TO_CART',
    product_id,
  };
};
