<template>
  <h4 class="mb-0">{{ title }}</h4>
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
