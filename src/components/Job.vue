<template>
  <h3>{{ title }} @ <a :href="companyURL" target="_blank">{{ company }}</a></h3>
  <h4>{{ duration }}</h4>
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
