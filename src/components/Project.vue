<template>
  <h3>{{ title }}</h3>
  <p>{{ skills.join(", ") }} | {{ date }}</p>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: String,
    skills: Array,
    date: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin-top: 0;
}
</style>
