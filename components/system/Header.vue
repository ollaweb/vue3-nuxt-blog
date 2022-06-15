<template>
   <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <nuxt-link class="navbar-logo" to="/">{{title}}</nuxt-link>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.alias">
              <nuxt-link class="navbar-link" :to="link.url">{{link.title}}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
import {app,links} from "@/_config.js";
export default {
    data() {
      return {
        title: app.title,
        links: links
      }
    }
}
</script>

<style lang="scss">
.navbar-link {
  &.nuxt-link-exact-active {
    color: #4165de;
  }
}
</style>
