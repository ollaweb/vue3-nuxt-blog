<template>
  <NewPostForm @submit="onSubmit"/>
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm.vue'

export default {
  components: {
    NewPostForm
  },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      console.log('Post added')
      console.log(post)
    }
  }
}
</script>
