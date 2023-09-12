<template>
  <div class="conteneur">
    <div class="conteneur2">
      <div
        class="carre"
        :style="`width:${taille}px; height:${taille}px; background-color:${couleurfond}`"
      ></div>
    </div>

    <div class="divselecteur">
      <input type="range" min="100" max="300" step="20" v-model="taille" />
      {{ taille }}
    </div>
    <div>
      <input type="color" v-model="couleurfond" />
    </div>

    <!-- https://medium.com/@renatello/how-to-upload-a-file-in-vue-js-895cdd3b35f8 -->
    <!-- <div class="margin">
              <button class="btn btn-info" @click="onPickFile">Télécharger une photo de profil</button>
              <input type="file" style="display : none" ref="fileInput" accept="image/*" @change="onFilePicked" />
          </div> -->

    <!-- https://stackoverflow.com/questions/49106045/preview-an-image-before-it-is-uploaded-vuejs -->
    <div class="margin">
      <label for="avatar">Ajoutez une image en jpg ou png :</label>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        @change="previewFiles"
      />
      <!-- <button @click="afficherimg">Envoyer</button> -->
    </div>
    <div>
      <div><img class="conteneur3" v-if="url" :src="url" /></div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "contenu-4",
  data() {
    return {
      taille: 100,
      couleurfond: "#ffff00",
      pict: "",
      imgsrc: "",
      url: null,
    };
  },
  methods: {
    previewFiles(event) {
      console.log(event.target.files);
      this.pict = event.target.files[0];
      this.url = URL.createObjectURL(this.pict);
    },
  },
};
</script>
  
  <style>
.conteneur {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-items: center;
}

.conteneur2 {
  display: flex;
  align-items: center;
  height: 320px;
  /* border: 1px solid blue; */
}
.conteneur3 {
  max-height: 70vh;
  max-width: 70vw;
  /* border: 1px solid blue; */
}
.carre {
  /* height: 300px;
      width: 300px; */
  background-color: rgb(137, 137, 194);
  margin-top: 20px;
  animation: translation 5s linear infinite;
  text-align: center;
}

.divselecteur {
  margin-top: 20px;
}

.margin {
  margin-top: 50px;
}

/* @keyframes translation {
      0% {
          transform: perspective(100px) translate3d(0px, 0px, 0px);
      }
      50% {
          transform: perspective(100px) translate3d(0px, 0px, 50px);
      }
      100% {
          transform: perspective(100px) translate3d(0px, 0px, 0px);
      }
  } */
</style>