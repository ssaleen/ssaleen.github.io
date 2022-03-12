<template>
  <div class="page">
    <h1>jobs</h1>
    <Job
      title="Software Engineering Intern"
      company="Ford Pro"
      companyURL="http://fordpro.com/"
      duration="01/2022 - 04/2022"
      :skills="['Vue.js', 'Spring/Java', 'SQL', 'JUnit']"
    />
    <Job
      title="Software Engineering Intern"
      company="Ricoh"
      companyURL="http://www.ricoh.ca/"
      duration="05/2021 - 08/2021"
      :skills="['Java', 'REST APIs', 'SNMP']"
    />
    <Job
      title="Software Engineering Intern"
      company="Seismic LiveSocial"
      companyURL="https://seismic.com/product-features/social-selling/"
      duration="09/2020 - 12/2020"
      :skills="['React.js', 'Angular', 'MongoDB', 'Redash', 'Ionic + Cordova', 'Blackberry Dynamics SDK', 'Selenium']"
    />
    <Job
      title="Systems Analyst Student"
      company="IESO"
      companyURL="http://www.ieso.ca/"
      duration="01/2020 - 04/2020"
      :skills="['Tableau', 'SQL', 'VBA']"
    />
  </div>
</template>

<script>
// // @ is an alias to /src
import Job from '@/components/Job.vue'

export default {
  name: 'JobsView',
  components: {
    Job
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>