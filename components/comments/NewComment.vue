<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name" for="name">Name:</AppInput>
        <AppTextArea v-model="comment.text" for="text">Text:</AppTextArea>
        <div class="controls">
          <AppButton>Comment!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from '@/components/UI/controls/Button.vue'
import AppInput from '@/components/UI/controls/Input.vue'
import AppTextArea from '@/components/UI/controls/TextArea.vue'

export default {
  components: {
    AppButton,
    AppInput,
    AppTextArea
  },
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
