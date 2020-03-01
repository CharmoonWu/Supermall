const getters = {
  cartList(state) {
    return state.cartList;
  },
  cartCount(state, getters) {
    // return state.cartList.length;
    return getters.cartList.length;
  },
  totalPrice(state, getters) {
    // const cartList = this.$store.getters.cartList;
    return getters.cartList
      .filter(item => {
        return item.checked;
      })
      .reduce((preValue, item) => {
        var regex = /\d+\.?\d*/g;
        var strnum = item.newPrice.match(regex);
        var numitem = parseFloat(strnum).toFixed(2);
        return preValue + item.count * numitem;
      }, 0)
      .toFixed(2);
  }
};
export default getters;
