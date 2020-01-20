<template>
  <div>
    <detail-recommend-goods
      :recommendGoods="recommendList"
    ></detail-recommend-goods>
  </div>
</template>

<script>
import DetailRecommendGoods from "../../content/detaileGoods/DetailRecommendGoods";
export default {
  data() {
    return {};
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    DetailRecommendGoods
  }
};
</script>

<style scoped></style>
