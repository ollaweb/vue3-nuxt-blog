<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth__form">
        <AppInput v-model="user.email" type="email" forName="login">Login:</AppInput>
        <AppInput v-model="user.password" type="password" forName="password">Password:</AppInput>
        <div class="controls">
          <AppButton>Login!</AppButton>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authUser', this.user)
        .then(res => {
          this.$router.push('/admin/')
        })
        .catch(e => {
          console.log(e)
          //reset
          this.user.email=''
          this.user.password=''
        })
    }
  }
}
</script>

<style lang="scss">
  .auth {
    margin-top: 80px;
    text-align: center;
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50vh;
      & input {
        width: 460px;
      }
    }
  }
</style>
