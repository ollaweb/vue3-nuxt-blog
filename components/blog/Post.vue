<template>
  <section class="post">
      <div class="container">
        <div class="post__header">
          <div class="post__image">
            <img :src="post.img" :alt="post.title">
          </div>
          <h1 class="title">{{post.title}}</h1>
          <p>{{post.descr}}</p>
        </div>

        <div class="post__body">
          <p>{{post.content}}</p>
        </div>
      </div>
    </section>
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
  .post {
    &__image {
      display: flex;
      align-items: center;
      max-height: 320px;
      overflow: hidden;
      @media (min-width: 481px) {
        max-height: 500px;
      }
      @media (min-width: 641px) {
        max-height: 600px;
      }
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
