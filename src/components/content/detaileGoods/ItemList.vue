<template>
  <div class="goods" @click="goToDetail">
    <img :src="ItemList.image" alt="" />
    <div class="goods-info">
      <p>{{ ItemList.title }}</p>
      <span class="price">¥{{ ItemList.price }}</span>
      <span class="collect">{{ ItemList.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {};
  },
  props: {
    ItemList: {
      type: Object
    }
  },
  methods: {
    goToDetail() {
      let iid = this.ItemList.item_id;
      this.$router.push("/detail/" + iid);
      console.log(iid);
    }
  }
};
</script>


<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
}
.goods img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: red;
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>