<template>
  <div>
    <div class="navbar">
      <navBar />
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <contenu1/>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>



<script>
import navBar from './components/navBar.vue'
import contenu1 from './components/contenu1.vue'
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'App',
//   // components: {
//   //   HelloWorld,
//   // }
// }

export default {
  name: 'App',
  components: {
    navBar,
    contenu1,
  },
};

</script>


<style>
* {
  margin: 0;
  padding: 0;
  color: #34495E;
}

body {
  background-color: rgb(244, 244, 244);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.navbar{
  max-height: 8vh;
}
</style>