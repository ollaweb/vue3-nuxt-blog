<template>
  <div class="wrapper-content">
    <Post :post="post"/>
    <Comments :comments="comments"/>
    <NewComment/>
  </div>
</template>

<script>
import Post from '@/components/blog/Post.vue'
import NewComment from '@/components/comments/NewComment.vue'
import Comments from '@/components/comments/Comments.vue'

export default {
  components: {
    Post,
    NewComment,
    Comments
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'Carpet on the floor',
        descr: 'I enjoy relaxing on the couch especially when there is a carpet on the floor',
        content: 'There is a contect text. For now I dont know what for it is. Bla bla. I need to create some more powerful projectas to find my lovely jobю Щту ьщку ыутеутсу! Шь зкуеен пщщвю Ш рщзу ыщ!',
        img: 'https://images.unsplash.com/photo-1655071516487-03bb9267b1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
      },
      comments: [
        {
          name: 'Alex',
          text: 'I like it!'
        },
        {
          name: 'Olga',
          text: 'Thank you for your inspiration'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .post {
    margin: 0 auto;
    max-width: 1000px;
    &__header {
      margin: 0 auto 30px;
      max-width: 600px;
      text-align: center;
      & p {
        color: #999999;
      }
    }
    &__image {
      margin-bottom: 16px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &__body {
      width: 100%;
    }
  }
</style>
