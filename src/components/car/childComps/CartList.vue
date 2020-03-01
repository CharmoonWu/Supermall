<template>
  <Scroll ref="scroll">
    <!-- <div v-for="(item, index) in CartList" :key="index">
        {{ item.imgURL }}
      </div> -->
    <cart-list-item
      v-for="item in CartList"
      :key="item.iid"
      :item-info="item"
      @sucdel="sucdel"
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
  },
  updated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    sucdel() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped></style>
