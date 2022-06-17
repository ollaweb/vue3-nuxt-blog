<template>
  <div class="wrapper-content">
    <Intro title="My posts:"/>
    <PostsList :posts="postsLoaded"/>
  </div>
</template>

<script>

export default {
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
