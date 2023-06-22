<template>
    <div>
        <h2>Périmètres et aires</h2>
        <select name="menu selector" id="" v-model="choix">
            <option>carré</option>
            <option>rectangle</option>
        </select>
        <div v-if="choix === 'carré'">
            <div>
                <label>Cotés du carré en cm : </label>
                <input class="margin-right" type="text" v-model="cotecarre" placeholder="cotés" @click="resetResult">
            </div>
            <div>
                <button class="padding-btn" @click="sendresult">ok</button>
            </div>
        </div>
        <div v-if="choix === 'rectangle'">
            <div>
                <label>Cotés du rectangle en cm : </label>
                <input class="margin-right" type="text" v-model="coterect1" @click="resetResult">
                <input class="margin-right" type="text" v-model="coterect2" @click="resetResult">
            </div>
            <div>
                <button class="padding-btn" @click="sendresult">ok</button>
            </div>
        </div>

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
            choix: "carré",
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
        },

        sendresult() {
            var phraseResultat = "";
            if (this.choix === 'carré') {
                if (this.cotecarre !== "") {
                    this.pericarre = parseInt(this.cotecarre * 4);
                    this.airecarre = parseInt(this.cotecarre) * parseInt(this.cotecarre);
                    phraseResultat = `Vous avez saisi ${this.cotecarre} pour le coté du carre, le périmetre est de : ${this.pericarre} cm et l'aire est de ${this.airecarre} cm carre.`
                }
                else {
                    phraseResultat = `vous devez rentrer des valeurs avant de cliquer sur ok`

                }
            }
            else {
                if (this.coterect1 !== "" && this.coterect2 !== "") {
                    this.perirect = parseInt((this.coterect1 * 2) + (this.coterect2 * 2));
                    this.airerect = parseInt(this.coterect1) * parseInt(this.coterect2);
                    phraseResultat = `Vous avez saisi ${this.coterect1} et ${this.coterect2} pour les cotés du rectangle, le périmetre est de : ${this.perirect} cm et l'aire est de ${this.airerect} cm carre.`
                }
                else {
                    phraseResultat = `vous devez rentrer des valeurs avant de cliquer sur ok`
                }
            }
            this.$emit('periaire', phraseResultat)
        },
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