<template>
  <div>
    <Header/>
    <div class="intro-wrapper">
      <Intro title="Admin page">
        <nuxt-link to="/admin" class="link isWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link isWhite">New Post</nuxt-link>
        <nuxt-link to="/admin/comments" class="link isWhite">Comments</nuxt-link>
      </Intro>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/system/Header.vue'
export default {
  components: {Header},
  middleware: ['auth']
}
</script>

<style lang="scss">
  .intro-wrapper {
    margin-top: 80px;
  }
</style>
