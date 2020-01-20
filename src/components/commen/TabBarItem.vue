<template>
  <div class="TabBarItem" @click="itemClick">
    <slot v-if="!isActive" name="item_icon"></slot>
    <slot v-else name="item_icon_active"></slot>
    <div :style="activeColor">
      <slot name="character"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      ActiveColor: "red"
    };
  },
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      // 返回一个当前处于活跃状态的路由
      //返回一个布尔值, 是否为true
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeColor() {
      return this.isActive ? { color: this.ActiveColor } : {};
    }
  }
};
</script>

<style scoped>
.TabBarItem {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.activeColor {
  color: red;
}
</style>
