<template>
  <Scroll>
    <!-- <div v-for="(item, index) in CartList" :key="index">
        {{ item.imgURL }}
      </div> -->
    <cart-list-item
      v-for="item in CartList"
      :key="item.iid"
      :item-info="item"
    />
  </Scroll>
</template>

<script>
import Scroll from "../../commen/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  data() {
    return {};
  },
  components: {
    Scroll,
    CartListItem
  },
  props: {
    CartList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped></style>
