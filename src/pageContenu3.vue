<template>
  <div class="margin-top">
    <h2>Exercice de la liste de courses</h2>
    <div class="margin-top">
      <label for="">Rentrez un mot : </label>
      <input
        class="margin-right"
        type="text"
        name=""
        id=""
        v-model="mot"
        v-on:keyup.enter="ajoutmot"
      />
    </div>
    <button class="padding-btn" @click="ajoutmot">ajouter</button>
    <div>
      <!-- {{ listemots }} -->
      <Contenu3 :tableaumots="listemots" @supp="deletemot" />
    </div>
  </div>
</template>
  
  <script>
import Contenu3 from "./components/contenu3.vue";
export default {
  name: "page-contenu-3",
  components: {
    Contenu3,
  },
  data() {
    return {
      mot: "",
      listemots: [],
    };
  },
  methods: {
    ajoutmot() {
      if (this.mot !== "") {
        this.listemots.push(this.mot);
        this.mot = "";
      }
    },
    deletemot(motasupp) {
      this.listemots.splice(motasupp, 1);
    },
  },
};
</script>
  
  <style>
.margin-top {
  margin-top: 2rem;
}

.margin-right {
  margin-right: 3vw;
  height: 1.3rem;
}

.padding-btn {
  margin: 1.5vh;
  padding: 0.5vh 3vw;
  background-color: #41b883;
}

.padding-btn:hover {
  background-color: #8ed9b7;
}
</style>