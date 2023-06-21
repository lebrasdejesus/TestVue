<template>
    <div class="resize">
        <p>Qu'est-ce que le Lorem Ipsum?
            Le Lorem Ipsumprocurer?
            Plusieurs variations de Lorem Ipsum peuvent être été altérée pailiser un passage du Lorem Ipsum, vous devez être
            sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet
            tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum.
            Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour
            générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient
            des mots farfelus, ou des touches d'humour.</p>
        <div>
            <div v-if="showResult" @click="PermutF">
                <img class="resize" id="rose"
                    src="https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg"
                    alt="chaton rose">
            </div>
            <div v-if="!showResult" @click="PermutT">
                <img class="resize" id="bleu" src="https://d2zp5xs5cp8zlg.cloudfront.net/image-78806-800.jpg"
                    alt="chaton bleu">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contenu-2',

    data() {
        return {
            showResult: false,
        };
    },
    methods: {
        PermutT() {
            if(!this.showResult)
                this.showResult = true;
        },
        PermutF() {
            if(this.showResult)
                this.showResult = false;
        }

    }
}


</script>

<style>
.resize {
    width: 20vw;
}
</style>