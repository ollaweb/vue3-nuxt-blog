<template>
  <div class="post-preview">
    <div class="post-image">
      <img :src="post.img" :alt="post.title">
    </div>
    <div class="post-content">
      <h3 class="title">{{post.title}}</h3>
      <p>{{post.descr}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .post-preview {
    padding: 16px;
    max-width: 33%;
    text-align: center;
  }
  .post-image {
    margin-bottom: 20px;
    width: 100%;
    height: 250px;
    & img {
      margin-bottom: 16px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .post-content {
    & p {
      color: #999999;
    }
  }
</style>
