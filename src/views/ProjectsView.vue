// to do: add hardware/software tags (that can be filtered?)
<template>
  <div class="page">
    <h1>projects</h1>
    <Project
      title="Portfolio Website"
      :skills="['Vue.js','HTML','CSS']"
      date=2022
    />
    <Project
      title="Home Security System"
      :skills="['C', 'Proteus', 'PCB/Circuit Design', 'Microcontrollers']"
      date=2021
    />
    <Project
      title="Multithreaded Web Crawler"
      :skills="['C', 'cURL', 'pthreads', 'libxml2', 'HTTP']"
      date=2021
    />
    <Project
      title="Multprocess PNG Retrieval and Concatenation Tool"
      :skills="['C', 'cURL', 'Shared Memory', 'Interprocess Communication', 'PNG signatures/chunks/CRC', 'binary I/O', ]"
      date=2021
    />
    <Project
      title="Multithreaded PNG Retrieval and Concatenation Tool"
      :skills="['C', 'cURL', 'pthreads', 'PNG signatures/chunks/CRC', 'binary I/O', ]"
      date=2021
    />
    <Project
      title="Reflex Timer"
      :skills="['Assembly', 'RISC-V', 'emulsiV']"
      date=2021
    />
    <Project
      title="Minimum Spanning Tree Finder"
      :skills="['C++', 'Graphs', 'MST', 'Prim\'s Algorithm']"
      date=2021
    />
    <Project
      title="Trie Dictionary / Autocomplete Tool"
      :skills="['C++', 'Tries']"
      date=2021
    />
    <Project
      title="Robotic Arm Controller (Mover/Extender/Grappler)"
      :skills="['VHDL', 'Quartus Prime', 'Moore/Mealy State Machines']"
      date=2020
    />
    <Project
      title="Home Energy Monitor"
      :skills="['VHDL', 'Quartus Prime', 'FPGA Design']"
      date=2020
    />
    <Project
      title="Classroom Mark Manager / Visualizer"
      :skills="['Java', 'Swing GUI']"
      date=2019
    />
    <Project
      title="Guess Who"
      :skills="['Java']"
      date=2018
    />
    <Project
      title="WAR Card Game"
      :skills="['Python']"
      date=2017
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