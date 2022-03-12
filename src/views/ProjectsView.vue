// to do: add hardware/software tags (that can be filtered?)
<template>
  <div class="page">
    <h1>projects</h1>
    <Project
      title="Portfolio Website"
      :skills="['Vue.js','HTML','CSS']"
      date="2022"
    />
    <Project
      title="Home Security System"
      :skills="['C', 'Proteus', 'PCB/Circuit Design', 'Microcontrollers']"
      date="2021"
    />
    <Project
      title="Multithreaded Web Crawler and Mapper"
      :skills="['C', 'cURL', 'pthreads']"
      date="2021"
    />
    <Project
      title="Multithreaded PNG Retrieval and Concatenation Tool"
      :skills="['C', 'cURL', 'pthreads', 'PNG signatures/chunks/CRC']"
      date="2021"
    />
    <Project
      title="Graphical Mark Output"
      :skills="['Java', 'Swing GUI']"
      date="2019"
    />
    <Project
      title="Guess Who"
      :skills="['Java']"
      date="2018"
    />
    <Project
      title="WAR Card Game"
      :skills="['Python']"
      date="2017"
    />
  </div>
</template>

<script>
// // @ is an alias to /src
import Project from '@/components/Project.vue'

export default {
  name: 'ProjectsView',
  components: {
    Project
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>