<template>
    <div>
        <h2>Périmètres et aires</h2>
        <div>
            <label>Cotés du carré en cm : </label>
            <input class="margin-right" type="text" v-model="cotecarre" placeholder="cotés" @click="resetResult">
        </div>
        <div>
            <button class="padding-btn" @click="PerimetreCarre">ok</button>
        </div>
        <p v-if="showResult">Vous avez saisi {{ cotecarre }} pour le coté du carre, le périmetre est de : {{ pericarre }} cm
            et l'aire est de {{ airecarre }} cm carre.</p>
        <div>
            <label>Cotés du rectangle en cm : </label>
            <input class="margin-right" type="text" v-model="coterect1" @click="resetResult">
            <input class="margin-right" type="text" v-model="coterect2" @click="resetResult">
        </div>
        <div>
            <button class="padding-btn" @click="PerimetreRect">ok</button>
        </div>
        <p v-if="showResult">Vous avez saisi {{ coterect1 }} et {{ coterect2 }} pour les cotés du rectangle, le périmetre
            est de : {{ perirect }} cm et l'aire est de {{ airerect }} cm carre.</p>

    </div>
</template>

<script>
export default {
    name: 'contenu-1',
    
    data() {
        return {
            showResult: false,
            result2: false,
            cotecarre: "",
            pericarre: "",
            airecarre: "",
            coterect1: "",
            coterect2: "",
            perirect: "",
            airerect: "",
        };
    },
    methods: {
        resetResult() {
            this.showResult = false;
            this.result2 = false;
        },
        PerimetreCarre() {
            this.showResult = true;

            this.pericarre = parseInt(this.cotecarre * 4);
            this.airecarre = parseInt(this.cotecarre) * parseInt(this.cotecarre);
        },
        PerimetreRect() {
            this.showResult = true;

            this.perirect = parseInt((this.coterect1 * 2) + (this.coterect2 * 2));
            this.airerect = parseInt(this.coterect1) * parseInt(this.coterect2);
        }
    }
};
</script>

<style>
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