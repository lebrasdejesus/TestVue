<template>
    <div class="contenant-agrandissement" v-if="imgaffichee !== null">
        <img class="image" :src="imgaffichee.image" :alt="imgaffichee.titre">
        <img @click="$emit('close')" class="croix" src="../assets/img-contenu5/noun-cross-2310545.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'contenu-5-agrandir',
    props: {
        imgaffichee: Object,
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.contenant-agrandissement{
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
}
.image{
    margin: 4rem;
}
.croix{
    position: absolute;
    top:0;
    margin-top: 2rem;
    cursor: pointer;
}

</style>