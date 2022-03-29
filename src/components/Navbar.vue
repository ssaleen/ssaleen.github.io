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
  name: "Navbar",
};
</script>
