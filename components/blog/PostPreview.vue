<template>
  <nuxt-link :to="getLink" class="post-preview">
    <div class="post-image">
      <img :src="post.img" :alt="post.title">
    </div>
    <div class="post-content">
      <h3 class="title">{{post.title}}</h3>
      <p>{{post.descr}}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink() {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>

<style lang="scss">
  .post-preview {
    padding: 16px;
    width: 100%;
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
