<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent>
        <AppInput v-model="post.title" for="title">Title:</AppInput>
        <AppInput v-model="post.descr" for="descr">Description:</AppInput>
        <AppInput v-model="post.img" for="img">Img Link:</AppInput>
        <AppTextArea v-model="post.content" for="content">Content:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton @click="cancel" class="btnDanger">Cancel</AppButton>
          <AppButton @click="onSubmit">Save</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object
    }
  },
  data() {
    return {
      post: this.postEdit ? {...this.postEdit} : {
        title: '',
        descr: '',
        img: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.post)
    },
    cancel() {
      this.$router.push('/admin/')
    }
  }
}
</script>

<style lang="scss">
  .new-post {
    & .controls {
      margin: 20px 0;
      text-align: center;
    }
  }
</style>
