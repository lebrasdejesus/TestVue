<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <button class="padding-btn" @click="viewExo(1)">exo1</button>
            <button class="padding-btn" @click="viewExo(2)">exo2</button>
            <button class="padding-btn" @click="viewExo(3)">exo3</button>
        </div>
        <!-- <contenu1 /> -->
        <div v-if="showExo === 1">
            <exo1 @addition="getresult" />
        </div>
        <div v-if="showExo === 2">
            <exo2 @palindrome="getresult"/>
        </div>
        <div v-if="showExo === 3">
            <exo3 />
        </div>

        <div class="contourdegueu">
            {{ resultat }}
        </div>
    </div>
</template>

<script>
// import contenu1 from './components/contenu1.vue'
import Exo1 from './components/exo1.vue'
import Exo2 from './components/exo2.vue'
import Exo3 from './components/exo3.vue'

export default {
    name: 'pageContenu-1',
    components: {
        // contenu1,
        Exo1,
        Exo2,
        Exo3,
    },
    data() {
        return {
            showExo: null,
            resultat: "",
        };
    },
    methods: {
        viewExo(exoNumber) {
            if (exoNumber !== this.showExo) {
                this.showExo = exoNumber;
                this.resultat = ""
            }
        },
        getresult(phraseResultat) {
            this.resultat = phraseResultat;
        }
    }
}
</script>


<style>
.padding-btn {
    margin: 1.5vh;
    padding: 0.5vh 3vw;
    background-color: #41B883;
}

.contourdegueu {
    margin-top: 2rem;
    border: 2px solid blue;
    padding: 2rem;
    background-color: #41B883;
}
</style>