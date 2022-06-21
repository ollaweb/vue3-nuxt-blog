<template>
<div class="wrapper-content">
  <section class="about">
    <div class="container">
      <h1 class="title">В этом приложении</h1>
      <img class="about__image" src="@/assets/img/about.jpg" alt="blog picture">
      <ul class="list-items">
        <li>🔥 SSR и Полная SEO оптимизация;</li>
        <li>🔥 Авторизация, регистрация пользователей;</li>
        <li>Защита админ панели;</li>
        <li>Работа с токенами - JWT.</li>
      </ul>
    </div>
  </section>
</div>
</template>

<script>
export default {
   head() {
    let title = 'About My SSR Blog!',
        descr = 'About My SSR Blog with Nuxt.js!',
        type = 'site'
    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  }
}


</script>
<style lang="scss">
.about {
  &__image {
    margin-bottom: 15px;
    width: 100%;
    max-width: 500px;
  }
}
</style>
