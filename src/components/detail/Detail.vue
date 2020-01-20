<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="itemClick" />

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <div>
        <ul>
          <li v-for="(item, index) in $store.state.cartList" :key="index">
            {{ item.count }}
          </li>
        </ul>
      </div>
      <detail-swiper :top-images="topImages" ref="base" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <detail-recommend-info :recommend-list="recommendList" ref="recommend" />
    </scroll>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isTabFixed" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "../../components/commen/scroll/Scroll";

import { backTop } from "../../common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "../../network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      themeTops: null
    };
  },
  mixins: [backTop],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid;
    // 处理数据在.then后面拿数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      console.log(data);
      // 1.获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;
      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      console.log(this.shop);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6. 获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res, error) => {
      if (error) return;
      this.recommendList = res.data.list;
    });
  },
  mounted() {
    const refresh = this.$refs.scroll.refresh;
    this.$bus.$on("GoodsLoad", () => {
      refresh();
    });
  },
  updated() {
    this.__getOffsetTop();
  },
  methods: {
    __getOffsetTop() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 0);
    },
    contentScroll(index) {
      // console.log(index);
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > 456;
    },
    addToCart() {
      const obj = {}; //创建对象
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.nowPrice;
      //添加到Store中
      this.$store.dispatch("addCart", obj);
      // console.log(this.$store);
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
}

/* .back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
} */
.detail-nav {
  background-color: #fff;
  position: relative;
  z-index: 11;
}
</style>
