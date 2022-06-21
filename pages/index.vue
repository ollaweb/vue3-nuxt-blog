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
  data() {
    return {
      posts: []
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
