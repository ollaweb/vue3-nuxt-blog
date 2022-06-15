<template>
  <div class="posts">
    <form @submit.prevent="loadPost">
      <input type="text" v-model="postId">
      <button type="submit">Get Post</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postId: ""
    }
  },
  methods: {
    loadPost() {
      this.$router.push(`/posts/${this.postId}`)
    }
  }
}
</script>
