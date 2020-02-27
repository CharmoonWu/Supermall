<template>
  <div id="category">
    <nar-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nar-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll
        id="tab-content"
        :data="[categoryData]"
        ref="category_scroll"
        :probeType="3"
        :pull-up-load="true"
        @pullingUp="loadMore"
      >
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <tab-control
            :title="['综合', '新品', '销量']"
            @tabClick="tabClick"
          ></tab-control>
          <tab-content-detail
            :category-detail="showCategoryDetail"
          ></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NarBar from "../commen/NarBar";
import TabMenu from "./childComps/TabMenu";
import Scroll from "../commen/scroll/Scroll";
import TabContentCategory from "./childComps/TabContentCategory";
import TabControl from "../content/TabControl";
import TabContentDetail from "./childComps/TabContentDetail";

// 网络请求

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "../../network/category";
// 常量导入
import { POP, SELL, NEW } from "../../common/const";
// 公共导入
import { tabControlMixin } from "../../common/mixin";

export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    };
  },
  components: {
    NarBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  created() {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      console.log(miniWallkey);

      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;

        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index);
    },
    // 滚动加载更多
    loadMore() {
      this.$refs.category_scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: #ff5777;
  font-weight: 700;
  color: #fff;
  position: relative;
  z-index: 99;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}
#tab-content {
  height: 100%;
  flex: 1;
}
</style>
