// @ts-nocheck
import BackTop from "../components/content/backTop/BackTop.vue";
import {
  POP,
  NEW,
  SELL
} from './const';
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
    },
  }

}
export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}