const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartCount(state, getters) {
    // return state.cartList.length;
    return getters.cartList.length
  }
};
export default getters;