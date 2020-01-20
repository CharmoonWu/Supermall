<template>
  <div class="">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <diV
          class="title-item"
          v-for="(item, index) in titles"
          :key="index"
          @click="titleClick(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </diV>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../commen/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick",index);
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: red;
}
.back img {
  margin-top: 12px;
}
</style>