<template>
  <div class="toast" v-show="show">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: null,
      show: false
    };
  },
  methods: {
    isshow(message = "加入购物车成功", duration = 500) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 100;
  background-color: black;
  color: #fff;
}
</style>