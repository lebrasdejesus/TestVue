<template>
  <div class="center margin-top">
    <p>
      Cliquez sur l'image du petit chat pour la changer.<br />Vous pouvez
      cliquer à l'infini, c'est vraiment super.<br />Pensez à vous limiter si
      vous souffrez d'épilepsie quand même.
    </p>
    <div class="margin-top">
      <div v-if="showResult" @click="PermutF">
        <img
          class="resize"
          id="rose"
          src="https://www.operationkindness.org/wp-content/uploads/blog-kitten-nursery-operation-kindness.jpg"
          alt="chaton rose"
        />
      </div>
      <div v-if="!showResult" @click="PermutT">
        <img
          class="resize"
          id="bleu"
          src="https://d2zp5xs5cp8zlg.cloudfront.net/image-78806-800.jpg"
          alt="chaton bleu"
        />
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "contenu-2",

  data() {
    return {
      showResult: false,
    };
  },
  methods: {
    PermutT() {
      if (!this.showResult) this.showResult = true;
    },
    PermutF() {
      if (this.showResult) this.showResult = false;
    },
  },
};
</script>
  
  <style>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.resize {
  width: 30vw;
}
</style>