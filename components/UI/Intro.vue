<template>
  <section class="intro">
    <div class="container">
      <h1>{{title}}</h1>
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.intro {
  margin: 30px 0;
  width: 100%;
  text-align: center;
  color: #FFFFFF;
  background-color: #4b40e3;
  & h1 {
    font-size: 26px;
  }
}
</style>
