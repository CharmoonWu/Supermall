<template>
  <div class="bottom-menu">
    <check-button
      class="select-all"
      @checkBtnClick="checkBtnClick"
      :checked="isSelectAll"
    ></check-button>
    <span>全选</span>
    <span class="total-price">合计：￥{{ $store.getters.totalPrice }}</span>
    <span class="buy-product">去计算({{ $store.getters.cartCount }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "BottomBar",
  components: {
    CheckButton
  },
  computed: {
    isSelectAll: function() {
      return (
        this.$store.getters.cartList.find(item => item.checked === false) ===
        undefined
      );
    }
    // totalPrice() {
    //   const cartList = this.$store.getters.cartList;
    //   return cartList
    //     .filter(item => {
    //       return item.checked;
    //     })
    //     .reduce((preValue, item) => {
    //       var regex = /\d+\.?\d*/g;
    //       var strnum = item.newPrice.match(regex);
    //       var numitem = parseFloat(strnum).toFixed(2);
    //       return preValue + item.count * numitem;
    //     }, 0)
    //     .toFixed(2);
    // }
  },
  methods: {
    checkBtnClick() {
      let isSelectAll = this.$store.getters.cartList.find(
        item => !item.checked
      );
      console.log(isSelectAll);
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    }
  }
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
