<template>
  <section class="new-comment">
    <div class="container">
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
