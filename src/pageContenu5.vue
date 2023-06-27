<template>
    <div>
        <Contenu5 @showimage="getimage"/>
        <Contenu5agrandir :class="showbigimage ? 'show' : 'hidden' " @close="showbigimage=false" :imgaffichee="imageactuelle"/>
    </div>
</template>

<script>
import Contenu5 from './components/contenu5.vue'
import Contenu5agrandir from './components/contenu5-agrandir.vue'
export default {
    name: 'page-contenu-5',
    components: {
        Contenu5,
        Contenu5agrandir,
    },
    data() {
        return {
            showbigimage: false,
            imageactuelle: null,
        };
    },
    methods: {
        getimage(donneesemit) {
            console.log(donneesemit)
            this.imageactuelle = donneesemit
            this.showbigimage = true;
        }
    }
}
</script>

<style>
.show{
    display: block;
}
.hidden{
    display: none;
}
</style>