<template>
  <div class="global">
    <div class="title">
      <div class="largeur50">
        <h1>
          texte fictif de titre un peu long pour faire du contenu alors qu'on a
          absoluement rien à dire
        </h1>
      </div>
    </div>

    <div class="conteneur-album">
      <div class="album">
        <!-- https://pavenum.com/blog/overlay-avec-hover-sur-une-image-en-html-css/ -->
        <!-- <div class="overlay-image" @click="agrandir">
                      <img class="image img1" src="../assets/img-contenu5/20210721-Underwater-Yelda-16-Modifier.jpg"
                          alt="sous l'eau" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Sous l'eau</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1" src="../assets/img-contenu5/20210721-Underwater-Yelda-90-Modifier.jpg"
                          alt="sous l'eau" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Sous l'eau 2</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1"
                          src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-5-Modifier-JPG-WEB-1280-2.jpg"
                          alt="sous l'eau" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Sous l'eau 3</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1"
                          src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-78-Modifier.jpg"
                          alt="sous l'eau" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Sous l'eau 4</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1" src="../assets/img-contenu5/casino.jpg" alt="maquillage" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Maquillage 1</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1" src="../assets/img-contenu5/firmament.jpg" alt="maquillage" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Maquillage 2</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1" src="../assets/img-contenu5/lin-long-2.jpg" alt="maquillage" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Maquillage 3</div>
                      </div>
                  </div>
                  <div class="overlay-image">
                      <img class="image img1" src="../assets/img-contenu5/sortilege.jpg" alt="maquillage" />
                      <div class="normal">
                          <div class="text"> </div>
                      </div>
                      <div class="survol">
                          <div class="icone"><img src="../assets/img-contenu5/noun-arrow-blanc.png" alt="fleche"></div>
                          <div class="text">Maquillage 4</div>
                      </div>
                  </div> -->

        <div
          class="overlay-image animation"
          v-for="(item, ke) in dataimg"
          :key="ke"
          @click="agrandir(item)"
        >
          <img
            class="image img1"
            :src="item.image"
            :alt="item.titre"
            @load="genererNbAleatoire(ke)"
          />
          <div class="normal">
            <div class="text"></div>
          </div>
          <div class="survol">
            <div class="icone">
              <img
                src="../assets/img-contenu5/noun-arrow-blanc.png"
                alt="fleche"
              />
            </div>
            <div class="text">{{ item.titre }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "contenu-5",
  data() {
    return {
      dataimg: [
        {
          image: "img-contenu5/20210721-Underwater-Yelda-16-Modifier.jpg",
          titre: "Sous l'eau 1",
        },
        {
          image: "img-contenu5/20210721-Underwater-Yelda-90-Modifier.jpg",
          titre: "Sous l'eau 2",
        },
        {
          image: "img-contenu5/20220124-Workshop-Immersion-Alison1.jpg",
          titre: "Sous l'eau 3",
        },
        {
          image: "img-contenu5/20220124-Workshop-Immersion-Alison2.jpg",
          titre: "Sous l'eau 4",
        },
        { image: "img-contenu5/casino.jpg", titre: "Maquillage 1" },
        { image: "img-contenu5/firmament.jpg", titre: "Maquillage 2" },
        { image: "img-contenu5/lin-long-2.jpg", titre: "Maquillage 3" },
        { image: "img-contenu5/sortilege.jpg", titre: "Maquillage 4" },
      ],
    };
  },
  methods: {
    agrandir(imag) {
      // console.log(imag)
      this.$emit("showimage", imag);
    },
    genererNbAleatoire(index) {
      const imgElement = document.querySelectorAll(".animation")[index];
      const randomDelay = Math.floor(Math.random() * (5000 - 500 + 1) + 500);
      console.log(randomDelay);
      imgElement.style.animationDuration = `${randomDelay}ms`;
      // this.randomNumber = Math.random() * 100;
    },
  },
};
</script>
  
  <style>
* {
  margin: 0;
  padding: 0;
}

.largeur50 {
  width: 50%;
  padding: 2rem;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: rgb(83, 83, 126);
  font-family: "Times New Roman", Times, serif;
  font-size: 2.5rem;
  /* line-height: 2.5rem; */
}

.conteneur-album {
  display: flex;
  justify-content: center;
  /* border: 1px solid rgb(130, 238, 152); */
}

.album {
  /* border: 1px solid violet; */
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  /* grid-template-rows: repeat(auto-fill, 1fr); */
  gap: 3rem;
  padding: 3rem;
  /* margin: 2rem; */
  width: 100%;
  /* justify-items: center; */
  justify-content: center;
}

.img1 {
  transform: translate(-190px, -160px);
}

/* Conteneur principal */
.overlay-image {
  position: relative;
  /* border: 1px solid blue; */
  height: 30rem;
  /* width: 15rem; */
  /* margin: 1rem; */
  overflow: hidden;
  /* animation: expandWidth 3s forwards; */
}
.animation {
  animation-name: expandWidth;
  animation-timing-function: forwards;
  animation-duration: 3s;
}
/* Image originale */
.overlay-image .image {
  display: block;
  height: auto;
}

/* Texte original */
.overlay-image .text {
  color: #fff;
  font-size: 1.5rem;
  /* line-height: 1.5em; */
  /* text-shadow: 2px 2px 2px #000; */
  text-align: left;
  position: absolute;
  bottom: 0;
  margin: 1rem;
}

/* Overlay */
.overlay-image .survol {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
}

/* Apparition overlay sur passage souris */
.overlay-image:hover .survol {
  opacity: 1;
}

/* .overlay-image .normal {
      transition: .5s ease;
  } */
/* 
  .overlay-image:hover .normal {
      opacity: 0;
  } */

.overlay-image .survol {
  background-color: rgba(0, 0, 0, 0.8);
  cursor: url(../assets/curseur-vert-20.png), auto;
}

.icone {
  height: 1.3rem;
  margin: 0.7rem;
  display: flex;
  justify-content: flex-end;
}

@keyframes expandWidth {
  from {
    width: 0;
  }

  to {
    width: 15rem;
  }
}
</style>