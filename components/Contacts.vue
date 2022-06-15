<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label for="name">Name:</label>
        <input v-model="user.name" type="text" name="name">
        <label for="email">Email:</label>
        <input v-model="user.email" type="email" name="email">
        <label for="text">Text:</label>
        <textarea v-model="user.text" name="text"></textarea>
        <div class="controls">
          <button class="btn btnWhite">Submit!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
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
