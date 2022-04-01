const initialState = {
  product_id: '',
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        product_id: action.product_id,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
