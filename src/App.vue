<template>
  <div>
    <navBar />
    <component :is="currentView" />
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>


<script>
import navBar from './components/navBar.vue';
import pageContenu1 from './pageContenu1.vue';
import pageContenu2 from './pageContenu2.vue';
import Home from './HomePage.vue';

// import HelloWorld from './components/HelloWorld.vue'

const routes = {
  '/': Home,
  '/contenu1': pageContenu1,
  '/contenu2': pageContenu2,
}

export default {
  name: 'App',
  components: {
    navBar,
    pageContenu1,
    pageContenu2,
    Home,
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || Home
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => { this.currentPath = window.location.hash })
  }
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

.navbar {
  max-height: 8vh;
}
</style>