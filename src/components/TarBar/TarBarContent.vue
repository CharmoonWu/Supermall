<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home">
        <img class="img_icon" slot="item_icon" src="../../assets/img/tabbar/home.svg" alt />
        <img
          class="img_icon_act"
          src="../../assets/img/tabbar/home_active.svg"
          slot="item_icon_active"
          alt
        />

        <div slot="character">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/profile">
        <img class="img_icon" slot="item_icon" src="../../assets/img/tabbar/profile.svg" alt />
        <img
          class="img_icon_act"
          src="../../assets/img/tabbar/profile_active.svg"
          slot="item_icon_active"
          alt
        />

        <div slot="character">档案</div>
      </tar-bar-item>
      <tar-bar-item path="/category">
        <img class="img_icon" slot="item_icon" src="../../assets/img/tabbar/category.svg" alt />
        <img
          class="img_icon_act"
          src="../../assets/img/tabbar/category_active.svg"
          slot="item_icon_active"
          alt
        />

        <div slot="character">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/car">
        <img class="img_icon" slot="item_icon" src="../../assets/img/tabbar/shopcart.svg" alt />
        <img
          class="img_icon_act"
          src="../../assets/img/tabbar/shopcart_active.svg"
          slot="item_icon_active"
          alt
        />

        <div slot="character">购物车</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "../commen/TabBar";
import TarBarItem from "../commen/TabBarItem";
export default {
  name: "TarBarContent",
  data() {
    return {};
  },
  components: {
    TarBar,
    TarBarItem
  }
};
</script>

<style scoped>
.img_icon {
  width: 23px;
  height: 23px;
  vertical-align: middle;
  margin-top: 7px;
}
.img_icon_act {
  width: 23px;
  height: 23px;
  vertical-align: middle;
  margin-top: 7px;
}
</style>
