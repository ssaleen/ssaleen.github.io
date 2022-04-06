<template>
  <!-- <img
    id="headshot"
    class="align-center"
    alt="Headshot of Saleen"
    src="/headshot.jpeg"
  > -->

  <main>
    <h1 class="fw-bold">Hi, I'm Saleen!</h1>
    <!-- <p class="fs-5 col-md-8">
      Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. Download all our examples to get started.
    </p> -->
    <p>
      Currently in my third year of Computer Engineering at the 
      <a href="https://uwaterloo.ca/" target="_blank">University of Waterloo</a>.
      I enjoy learning about all things technology, programming, electronics, and design!
      Besides that, I love soccer, basketball, biking, and F1!
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
  </main>
</template>

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
