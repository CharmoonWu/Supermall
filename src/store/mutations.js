const mutations = {
  addCounter(state, payload) {
    payload.count++

  },
  addToCart(state, payload) {
    state.cartList.push(payload);
  },
  delValuable(state, payload) {
    state.cartList.splice(payload, 1)
  }
}
export default mutations