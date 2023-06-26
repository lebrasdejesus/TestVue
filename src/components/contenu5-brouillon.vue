<template>
    <div class="global">
        <div class="title">
            <div class="largeur50">
                <h1>texte fictif de titre un peu long pour faire du contenu alors qu'on a absoluement rien à dire</h1>
            </div>
        </div>

        <!-- <div class="parent">
                <div class="child1"></div>
                <div class="child1 child2"></div>
            </div> -->

        <!-- <div class="imagePrez">
                <img class="img1" src="../assets/img-contenu5/20210721-Underwater-Yelda-16-Modifier.jpg" alt="">
            </div>
            <div class="imagePrez absolute">
                <p class="subtitle">Sous l'eau</p>
            </div>
            <div class="imagePrez">
                <img class="img1" src="../assets/img-contenu5/20210721-Underwater-Yelda-90-Modifier.jpg" alt="">
            </div>
            <div class="imagePrez">
                <img class="img1"
                    src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-5-Modifier-JPG-WEB-1280-2.jpg"
                    alt="">
            </div>
            <div class="imagePrez">
                <img class="img1"
                    src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-78-Modifier.jpg"
                    alt="">
            </div>
            <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/casino.jpg" alt=""></div>
            <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/firmament.jpg" alt=""></div>
            <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/lin-long-2.jpg" alt=""></div>
            <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/sortilege.jpg" alt=""></div> -->
        <div class="conteneur-album">
            <div class="album">

                <div class="overlay-image">
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
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'contenu-5',
    // methods: {
    // },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
/* .global{
    width: 100%;
} */

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
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.5rem;
    /* line-height: 2.5rem; */
}
.conteneur-album{
    display: flex;
    justify-content: center;
    border: 1px solid rgb(130, 238, 152);
    /* align-items: center; 
    width: 100%; */
}
.album {
    border: 1px solid violet;
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    /* grid-template-rows: repeat(auto-fill, 1fr); */
    gap: 3rem;
    padding: 3rem;
    /* margin: 2rem; */
    width: 100vw;
}

/* .imagePrez {
    border: 1px solid blue;
    height: 30rem;
    width: 15rem;
    margin: 3rem;
    overflow: hidden;
    filter: brightness(100%);
    -webkit-filter: brightness(100%);
    background-color: rgba(0, 0, 0, 0);
}

.imagePrez img:hover {
    filter: brightness(30%);
    -webkit-filter: brightness(30%);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
} */

.img1 {
    transform: translate(-190px, -160px);
}

/* .subtitle {
    color: aquamarine;
    font-size: 2rem;
    z-index: 2;
} */

.absolute {
    position: absolute;
}

/* .centered {
    display: flex;
    justify-content: center;
    align-items: center;
} */

/* Conteneur principal */
.overlay-image {
    position: relative;
    border: 1px solid blue;
    height: 30rem;
    /* width: 15rem; */
    /* margin: 1rem; */
    overflow: hidden;
    width: 0;
    animation: expandWidth 3s forwards;
}

/* Image originale */
.overlay-image .image {
    display: block;
    /* width: 100%; */
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
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    /* width: 100%; */
}

/* Overlay */
.overlay-image .survol {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
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
    cursor: pointer;
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

/* .container {
  width: 0;
  animation: expandWidth 2s forwards;
} */
/* .parent {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px;
    background-color: blue;
    border: 2px solid black;
}
.child1 {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 10px;
    top: 0;
    left: 0;
    opacity: 0.7;
    background: rgb(206, 149, 149);
}
.child2 {
    z-index: 1;
    margin: 20px;
    background: green;
} */</style>