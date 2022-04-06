<template>
  <h3 class="mb-0">{{ title }}</h3>
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
