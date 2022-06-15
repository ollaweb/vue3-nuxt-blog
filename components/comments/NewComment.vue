<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">
        <label for="name">Name:</label>
        <input v-model="comment.name" type="text" name="name">
        <label for="text">Text:</label>
        <textarea v-model="comment.text" name="text"></textarea>
        <div class="controls">
          <button class="btn btnPrimary">Comment!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.comment)
    }
  }
}
</script>

<style lang="scss">
  .new-comment {
    text-align: center;
    & .contact-form {
      margin: 30px auto;
      max-width: 600px;
    }
    & .controls {
      margin: 30px 0;
    }
  }
</style>
