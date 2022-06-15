<template>
  <div class="wrapper-content">
    <Promo/>
    <Intro title="Recent posts:"/>
  </div>
</template>

<script>
import Promo from '@/components/Promo.vue'
import Intro from '@/components/UI/Intro.vue'
export default {
  components: {
    Promo,
    Intro
    }
}
</script>
