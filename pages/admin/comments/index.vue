<template>
  <CommentTable :thead="['Name','Text','Status','Change Status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span> {{comment.name}} </span></td>
        <td><span> {{comment.text}} </span></td>
        <td>
          <span v-if="comment.published" class="status true">Published</span>
          <span v-else class="status false">Hidden</span>
        </td>
        <td><span @click="changeComment(comment)" class="link">Change Status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
  </CommentTable>
</template>

<script>
import axios from 'axios'
import CommentTable from '@/components/admin/CommentTable.vue'

export default {
  components: {
    CommentTable
  },
  layout: 'admin',
  data() {
    return {
      comments: []
    }
  },
  mounted() {
   this.loadComments()
  },
  methods: {
    loadComments() {
      axios
        .get('https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
        .then(res => {
          let commentsArray =[]
          Object.keys(res.data).forEach(key => {
            const comment = res.data[key]
            commentsArray.push({...comment, id: key})
          })
          this.comments = commentsArray
        })
    },
    changeComment(comment) {
      comment.published = !comment.published
      axios
        .put(`https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/comments/${comment.id}.json`, comment)
    },
    deleteComment(id) {
      axios
        .delete(`https://nuxt-blog-1092b-default-rtdb.europe-west1.firebasedatabase.app/comments/${id}.json`)
        .then(res => this.loadComments())
    }

  }
}
</script>
