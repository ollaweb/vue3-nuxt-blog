<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="user.name" for="name">Name:</AppInput>
        <!-- email -->
        <AppInput v-model="user.email" for="email" type="email">Email:</AppInput>
        <!-- text -->
        <AppTextArea v-model="user.text" for="text">Text:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton btnClass="btnWhite">Submit!</AppButton>
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
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.user)
    }
  }
}
</script>

<style lang="scss">
  .contact {
    text-align: center;
    background-color: #4f68f4;
    color: #FFFFFF;
    & .title {
      color: #FFFFFF;
    }
    & .contact-form {
      margin: 30px auto;
      max-width: 600px;
    }
    & .controls {
      margin: 30px 0;
    }
  }
</style>
