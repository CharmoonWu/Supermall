<template>
  <div id="category">
    <nar-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nar-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
    </div>
  </div>
</template>

<script>
import NarBar from "../commen/NarBar";
import TabMenu from "./childComps/TabMenu";

// 网络请求

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "../../network/category";
// 常量导入
import { POP, SELL, NEW } from "../../common/const";
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
    TabMenu
  },
  created() {
    this._getCategory();
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list;
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
      // 1:获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2:发送请求，传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // 3:将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    selectItem(index) {
      this._getSubcategories(index);
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
