<template>
  <div>
    <grid-view>
      <goods-list-item
        v-for="(item, index) in categoryDetail"
        :goodsItem="item"
        :key="index"
      ></goods-list-item>
    </grid-view>
  </div>
</template>

<script>
import GridView from "../../commen/gridView/GridView";
import GoodsListItem from "../../content/goods/GoodsListItem";
export default {
  name: "TabContentDetail",
  data() {
    return {};
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GridView,
    GoodsListItem
  }
};
</script>

<style scoped></style>
