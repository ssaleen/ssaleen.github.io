<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar,
  },
}
</script>

<style>
/* * {
  margin: 0;
} */

#app {
  /* font-family: Noto Sans, sans-serif; */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page,
.page-wide {
  padding: 1rem;
  margin: auto;
}
.page {
  max-width: 50rem;
}
.page-wide {
  max-width: 80rem;
}
h1 {
  text-align: center;
}
h2 {
  margin-bottom: 0%;
}
h3 {
  margin: 0 0 0;
}
h4 {
  margin: 0 0 0;
}

a {
  color: dodgerblue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
li {
  margin: 0 0 0.3rem;
}
</style>
