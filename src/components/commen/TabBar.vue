<template>
  <div class="TarBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TarBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.TarBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  display: flex;
  background: #f2f2f2;
}
</style>
