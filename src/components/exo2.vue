<template>
    <div>
        <h2>Palindrome</h2>
        <div>
            <label for="palindrome">Votre mot : </label>
            <input class="margin-right" type="text" v-model="motUser" placeholder="saisissez un mot" @click="resetResult">
        </div>
        <div>
            <button class="padding-btn" @click="sendresult">ok</button>
        </div>
        <!-- <p v-if="showResult && result2">{{ motUser }} est un palindrome.</p>
        <p v-else-if="showResult && !result2">{{ motUser }} n'est pas un palindrome.</p> -->
    </div>
</template>

<script>
export default {
    name: 'Exo-2',

    data() {
        return {
            motUser: "",
            // showResult: false,
            result2: "",
        };
    },
    methods: {
        // resetResult() {
        //     this.showResult = false;
        //     this.result2 = false;
        // },
        sendresult() {
            var phraseResultat = "";

            if (this.motUser !== "") {
                this.result2 = this.motUser.split('').reverse().join('');
                if (this.result2 === this.motUser) {
                    phraseResultat = `${ this.motUser } est un palindrome.`     
                } else {
                    phraseResultat = `${ this.motUser } n'est pas un palindrome.`
                }
            } else {
                phraseResultat = `vous devez rentrer un mot avant de cliquer sur ok`
            }
            this.$emit('palindrome', phraseResultat)
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