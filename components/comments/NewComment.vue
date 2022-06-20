<template>
  <section class="new-comment">
    <div class="container">
      <!-- message -->
      <Message v-if="message" :message="message"/>
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name" forName="name">Name:</AppInput>
        <AppTextArea v-model="comment.text" forName="text">Text:</AppTextArea>
        <div class="controls">
          <AppButton>Comment!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        published: false,
        ...this.comment
      })
        .then(()=> {
          this.message = 'Submited'
          //reset
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e => console.log(e))
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
