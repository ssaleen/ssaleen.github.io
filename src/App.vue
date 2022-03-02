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
        <a href="/saleen_resume.pdf">resume</a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  /* background-color: teal; */
  width: 100%;
}
nav a {
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  text-decoration: none;
  color: teal;
}
nav .menu {
  max-width: 50rem;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
}
nav .menu-right a.router-link-exact-active {
  /* color: gray; */
  text-decoration: underline;
}
nav .menu-left {
  color: black;
}
nav .menu-left a {
  font-weight: bold;
}
nav .menu-right {
  margin-left: auto;
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
h3 {
  margin: 40px 0 0;
}
a {
  color: dodgerblue;
  text-decoration: none;
}
li {
  margin: 0 0 0.3rem;
}
</style>
