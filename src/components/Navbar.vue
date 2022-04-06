<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fw-bold fs-4">saleen shahriar</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="nav-link" to="/">home</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/jobs">jobs</router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/projects">projects</router-link></li>
        <li class="nav-item"><a class="nav-link" href="/saleen_resume.pdf" target="_blank">resume</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
a.router-link-exact-active {
    font-weight: bold;
}
</style>
