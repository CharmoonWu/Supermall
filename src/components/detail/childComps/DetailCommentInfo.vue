<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  data() {
    return {
      msg: "获取评论信息"
    };
  },
  props: {
    commentInfo: {
      type: Object
    }
  }
};
</script>

<style scoped></style>
