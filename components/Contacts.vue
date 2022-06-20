<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
        <!-- message -->
        <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="user.name" forName="name">Name:</AppInput>
        <!-- email -->
        <AppInput v-model="user.email" forName="email" type="email">Email:</AppInput>
        <!-- text -->
        <AppTextArea v-model="user.text" forName="text">Text:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton btnClass="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      message: null,
      user: {
        name: '',
        email: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.message='Submited'
      //reset
      this.user.name= ''
      this.user.email= ''
      this.user.text= ''
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
