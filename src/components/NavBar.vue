<template>
  <nav>
    <div class="menu">
      <div class="menu-left">
        <!-- saleen shahriar -->
        <router-link to="/">saleen shahriar</router-link>
      </div>
      <div class="menu-right">
        <!-- <router-link to="/">home</router-link> -->
        <router-link to="/jobs">jobs</router-link>
        <router-link to="/projects">projects</router-link>
        <a href="/saleen_resume.pdf" target="_blank">resume</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  border-bottom: 1px solid black;
}
nav a {
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
nav .menu {
  max-width: 50rem;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
}
nav .menu a.router-link-exact-active {
  text-decoration: underline;
}
nav .menu-left a {
  font-weight: bold;
}
nav .menu-right {
  margin-left: auto;
}
</style>
