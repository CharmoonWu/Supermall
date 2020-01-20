const actions = {
  addCart(content, payload) {
    // console.log(info); //查看是否添加过
    const oldInfo = content.state.cartList.find(item => item.iid === payload.iid);

    if (oldInfo) {
      // oldInfo.count += 1
      content.commit('addCounter', oldInfo)

    } else {
      payload.count = 1;
      content.commit('addToCart', payload)

    }

  }
}

export default actions