<template>
  <div>
    <div class="navbar">
      <navBar />
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Addition</h2>
    <div>
      <label for="chiffre1">Chiffre 1 : </label>
      <input class="margin-right" type="number" v-model="nb1" placeholder="Nombre 1">
      <label for="chiffre2">Chiffre 2 : </label>
      <input class="margin-right" type="number" v-model="nb2" placeholder="Nombre 2">
    </div>
    <div>
      <button class="padding-btn" @click="addNumbers">ok</button>
    </div>
    <p>Vous avez saisi {{ nb1 }} et {{ nb2 }}, l'addition des 2 est : {{ result }}</p>

    <h2>Palindrome</h2>
    <div>
      <label for="palindrome">Votre mot : </label>
      <input class="margin-right" type="text" v-model="motUser" placeholder="saisissez un mot" @click="resetResult">
    </div>
    <div>
      <button class="padding-btn" @click="isPalindrome">ok</button>
    </div>
    <p v-if="showResult && result2">{{ motUser }} est un palindrome.</p>
    <p v-else-if="showResult && !result2">{{ motUser }} n'est pas un palindrome.</p>

    <h2>Périmètres et aires</h2>
    <div>
      <label>Cotés du carré en cm : </label>
      <input class="margin-right" type="text" v-model="cotecarre" placeholder="cotés" @click="resetResult">
    </div>
    <div>
      <button class="padding-btn" @click="PerimetreCarre">ok</button>
    </div>
    <p v-if="showResult">Vous avez saisi {{ cotecarre }} pour le coté du carre, le périmtre est de : {{ pericarre }} cm et l'aire est de {{ airecarre }} cm carre.</p>


  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>



<script>
import navBar from './components/navBar.vue'
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
  },
  data() {
    return {
      nb1: "",
      nb2: "",
      result: 0,
      motUser: "",
      showResult: false,
      result2: false,
      cotecarre: "",
      pericarre: "",
      airecarre:"",
    };
  },
  methods: {
    addNumbers() {
      this.result = parseInt(this.nb1) + parseInt(this.nb2);
    },
    resetResult() {
      this.showResult = false;
      this.result2 = false;
    },
    isPalindrome() {
      // if(this.motUser === this.motUser.split('').reverse().join('')) {
        // this.result2 = true
        this.result2 = this.motUser === this.motUser.split('').reverse().join('');
        this.showResult = true;
      // }
    },
    PerimetreCarre() {
      this.showResult = true;

      this.pericarre = parseInt(this.cotecarre * 4);
      this.airecarre = parseInt(this.cotecarre) * parseInt(this.cotecarre);
    }
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
.navbar{
  max-height: 8vh;
}
h2 {
  margin: 2vh;
}

.margin-right {
  margin-right: 3vw;
  height: 1.3rem;
}

.padding-btn {
  margin: 1.5vh;
  padding: 0.5vh 3vw;
  background-color: #41B883;
}

</style>