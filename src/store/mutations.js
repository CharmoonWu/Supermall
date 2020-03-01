const mutations = {
  addCounter(state, payload) {
    payload.count++;
    localStorage.setItem("cartList", JSON.stringify(state.cartList));
  },
  addToCart(state, payload) {
    state.cartList.push(payload);
    localStorage.setItem("cartList", JSON.stringify(state.cartList));
  },
  delValuable(state, payload) {
    state.cartList.splice(payload, 1);
    localStorage.setItem("cartList", JSON.stringify(state.cartList));
  }
};
export default mutations;
