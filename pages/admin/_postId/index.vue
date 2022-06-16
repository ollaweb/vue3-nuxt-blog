<template>
  <NewPostForm
  @submit="onSubmit"
  :postEdit="post"/>
</template>

<script>
import NewPostForm from '@/components/admin/NewPostForm.vue'

export default {
  components: {
    NewPostForm
  },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: 'Carpet on the floor',
        descr: 'I enjoy relaxing on the couch especially when there is a carpet on the floor',
        content: 'There is a contect text. For now I dont know what for it is. Bla bla. I need to create some more powerful projectas to find my lovely jobю Щту ьщку ыутеутсу! Шь зкуеен пщщвю Ш рщзу ыщ!',
        img: 'https://images.unsplash.com/photo-1655071516487-03bb9267b1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      },
    }
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing!')
      console.log(post)
    }
  }
}
</script>
