<template>
  <div class="page">
    <!-- <img
      id="headshot"
      class="align-center"
      alt="Headshot of Saleen"
      src="/headshot.jpeg"
    > -->
    <h1>hello!</h1>
    <p>
      Hi, I'm Saleen, a second year Computer Engineering student at the 
      <a href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a>.
      I enjoy learning about all things technology, programming, and electronics!
      If you don't like that stuff, I also love soccer, basketball, biking, and F1!
    </p>
    <p>
      You can check out my
      <router-link to="/jobs">work experience</router-link>
      and my
      <router-link to="/jobs">projects</router-link>
      on this website.
      Otherwise, feel free to reach out to me at
      <a href="mailto:s4shahri@uwaterloo.ca">s4shahri@uwaterloo.ca</a>
      or on my
      <a href="http://www.linkedin.com/in/saleenshahriar" target="_blank">LinkedIn</a>.
    </p>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headshot {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.align-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
