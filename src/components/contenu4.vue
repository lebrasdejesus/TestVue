<template>
  <div class="conteneur">
    <div>
      <h2>Color picker avec taille modifiable</h2>
      <div class="conteneur2">
        <div
          class="carre"
          :style="`width:${taille}px; height:${taille}px; background-color:${couleurfond}`"
        ></div>
      </div>
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
      <h2>Ajouter une image à la page</h2>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        @change="previewFiles"
      />
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
      couleurfond: "#34495E",
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
  justify-content: center;
  align-items: center;
  height: 320px;
}
.conteneur3 {
  max-height: 70vh;
  max-width: 70vw;
  margin-top: 20px;
}
.carre {
  background-color: rgb(137, 137, 194);
  animation: translation 5s linear infinite;
}

.divselecteur {
  margin-top: 30px;
}

.margin {
  margin-top: 30px;
}
</style>