<template>
  <h4 class="mb-0"><a :href="companyURL" target="_blank">{{ company }}</a></h4>
  <h4 class="mb-0">{{ title }}</h4>
  <h5>{{ duration }}</h5>
  <p>Technologies: {{ skills.join(", ") }}</p>
  <ul>
    <li v-for="note in notes" v-bind:key="note">{{note}}</li>
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
    notes: Array,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>