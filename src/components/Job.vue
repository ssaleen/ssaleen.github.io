<template>
  <h2>{{ title }} @ {{ company }}</h2>
  <h3>{{ duration }}</h3>
  <p>{{ description }}</p>
  <p>
    For a guide and recipes on how to configure / customize this project,<br />
    check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
      >vue-cli documentation</a
    >.
  </p>
  <h3>Ecosystem</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener"
        >vue-router</a
      >
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a
        href="https://github.com/vuejs/vue-devtools#vue-devtools"
        target="_blank"
        rel="noopener"
        >vue-devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
        >vue-loader</a
      >
    </li>
    <li>
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
        >awesome-vue</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "Job",
  props: {
    title: String,
    company: String,
    duration: String,
    description: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
