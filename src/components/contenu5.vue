<template>
    <div>
        <div class="contenant">
            <div class="title">
                <div class="largeur50">
                    <h1>texte fictif de titre un peu long pour faire du contenu alors qu'on a absoluement rien
                        à dire</h1>
                </div>
            </div>

            <div class="album">
                <div class="imagePrez">
                    <img class="img1" src="../assets/img-contenu5/20210721-Underwater-Yelda-16-Modifier.jpg" alt="">
                    <div class="absolute">
                        <p class="subtitle">Sous l'eau</p>
                    </div>
                </div>
                <!-- <div class="imagePrez">
                </div> -->
                <div class="imagePrez"> <img class="img1"
                        src="../assets/img-contenu5/20210721-Underwater-Yelda-90-Modifier.jpg" alt="">
                </div>
                <div class="imagePrez"> <img class="img1"
                        src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-5-Modifier-JPG-WEB-1280-2.jpg"
                        alt=""></div>
                <div class="imagePrez"> <img class="img1"
                        src="../assets/img-contenu5/20220124-Workshop-Immersion-Alison-Bounce-Châteauroux-78-Modifier.jpg"
                        alt=""></div>
                <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/casino.jpg" alt=""></div>
                <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/firmament.jpg" alt=""></div>
                <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/lin-long-2.jpg" alt=""></div>
                <div class="imagePrez"> <img class="img1" src="../assets/img-contenu5/sortilege.jpg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contenu-5',
    // data() {
    //     return {
    //     };
    // },
    methods: {
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.contenant {
    /* width: 100%; */
    /* padding: 5rem; */
    border: red 1px;
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
    font-family: 'Times New Roman', Times, serif;
}

.album {
    border: 1px solid violet;
    display: flex;
    flex-wrap: wrap;
}

.imagePrez {
    border: 1px solid blue;
    height: 30rem;
    width: 15rem;
    margin: 3rem;
    overflow: hidden;
    /* filter: brightness(100%); */
    -webkit-filter: brightness(100%);
}

.imagePrez img:hover {
    /* filter: brightness(30%); */
    -webkit-filter: brightness(30%);
}

.img1 {
    transform: translate(-190px, -160px);
}

.subtitle {
    color: aquamarine;
    font-size: 14rem;
    z-index: 10;
}

.absolute {
    position: absolute;
}

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>