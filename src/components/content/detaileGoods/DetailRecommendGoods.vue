<template>
  <div class="goods">
    <div class="info-header">热门推荐</div>
    <item-list
      v-for="(item, index) in recommendGoods"
      :key="index"
      :item-list="item"
    >
    </item-list>
  </div>
</template>

<script>
import ItemList from "./ItemList";
export default {
  name: "DetailRecommendGoods",
  components: {
    ItemList
  },
  props: {
    recommendGoods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
