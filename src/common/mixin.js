// @ts-nocheck
import BackTop from "../components/content/backTop/BackTop.vue";

export const backTop = {
  data() {
    return {
      isTabFixed: false,
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
    // contentScroll(position) {
    //   // 判断BackTop是否显示
    //   this.isShowBackTop = -position.y > 1000;
    //   this.isTabFixed = -position.y > 456;
    // },
  }

}