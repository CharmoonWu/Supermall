<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <tar-bar-content></tar-bar-content>
  </div>
</template>

<script>
import TarBarContent from "./components/TarBar/TarBarContent";
export default {
  name: "app",
  components: {
    TarBarContent
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  touch-action: none;
}
</style>
