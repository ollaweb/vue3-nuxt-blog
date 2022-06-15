<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <ul class="comment">
        <li v-for="comment in comments" :key="comment.name" class="comment__item">
          <p class="comment__name">{{comment.name}}</p>
          <p class="comment__text">{{comment.text}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
.comments {
  text-align: center;
}
  .comment {
    &__item {
      margin: 0 auto 20px;
      padding: 20px;
      max-width: 1000px;
      background-color: #FFFFFF;
    }
    &__name {
      font-size: 24px;
      color: #5c65eb;
    }
  }
</style>
