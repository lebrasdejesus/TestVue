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
            <button class="padding-btn" @click="sendresult">ok</button>
        </div>
        <!-- <p v-if="showResult">Vous avez saisi {{ nb1 }} et {{ nb2 }}, l'addition des 2 est : {{ result }}</p> -->
    </div>
</template>

<script>
export default {
    name: 'Exo-1',

    data() {
        return {
            nb1: null,
            nb2: null,
            result: 0,
        };
    },
    methods: {
        sendresult() {
            var phraseResultat = "";
            if (this.nb1 !== null && this.nb2 !== null) {
                this.result = parseInt(this.nb1) + parseInt(this.nb2);
                phraseResultat = `Vous avez saisi ${this.nb1} et ${this.nb2}, l'addition des 2 est : ${this.result}`
            } else {
                phraseResultat = `vous devez rentrer un chiffre dans chaque champ`
            }
            this.$emit('addition', phraseResultat)
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