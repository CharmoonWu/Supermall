<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ $store.state.cartList.length }})</div>
    </nav-bar>
    <!-- <div>{{ $store.state.cartList.length }}</div> -->
    <!-- 写到传数值进商品数量 -->
    <cart-list
      class="cart-list"
      :cart-list="$store.getters.cartList"
    ></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "../commen/navbar/NavBar";
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";
export default {
  name: "Car",
  data() {
    return {};
  },
  components: {
    NavBar,
    CartList,
    BottomBar
  }
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  background-color: #fd6f8a;
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  overflow: hidden;
}
</style>
