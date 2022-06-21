<template>
  <div class="wrapper-content">
    <Promo/>
    <Intro title="Recent posts:"/>
    <PostsList :posts="postsLoaded"/>
    <Contacts/>
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Contacts from '@/components/Contacts.vue'

export default {
  components: {
    Promo,
    Contacts
  },
  head() {
    let title = 'My SSR Blog!',
        descr = 'My SSR Blog with Nuxt.js!',
        type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
