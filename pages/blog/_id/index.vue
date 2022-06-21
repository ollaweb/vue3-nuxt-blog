<template>
  <div class="wrapper-content">
    <Post :post="post"/>
    <client-only>
      <Comments :comments="comments"/>
      <NewComment :postId="$route.params.id"/>
    </client-only>
  </div>
</template>

<script>
import axios from 'axios'

import Post from '@/components/blog/Post.vue'
import NewComment from '@/components/comments/NewComment.vue'
import Comments from '@/components/comments/Comments.vue'

export default {
  components: {
    Post,
    NewComment,
    Comments
  },
  head() {
    let title = this.post.title,
        descr = this.post.descr,
        type = 'article',
        img = `${this.post.img}`
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:image', name: 'og:image', content: img }
      ]
    }
  },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.id}.json`),
      axios.get(`https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/comments.json`)
    ])
  let postComments = Object
    .values(comments.data)
    .filter(comment =>
      (comment.postId === context.params.id) && comment.published)
    return {
      post: post.data,
      comments: postComments
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
