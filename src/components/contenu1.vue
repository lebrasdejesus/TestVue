<template>
    <div>
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
            nb1: "",
            nb2: "",
            result: 0,
            motUser: "",
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