<template>
  <h3>{{ title }} @ <a :href="companyURL" target="_blank">{{ company }}</a></h3>
  <h4>{{ duration }}</h4>
  <ul>
    <li v-for="skill in skills" v-bind:key="skill">{{skill}}</li>
  </ul>
</template>

<script>
export default {
  name: "Job",
  props: {
    title: String,
    company: String,
    companyURL: String,
    duration: String,
    description: String,
    skills: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin-top: 1%;
}
</style>
