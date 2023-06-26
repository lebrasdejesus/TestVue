<template>
    <div>
        <ul>
            <li v-for="(item, ke) in tableaumots" :key="ke">• {{ item }} <img @click="deletemot(ke)" class="redim" src="../assets/poubelle.png"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'contenu-3',
    props: {
        tableaumots: Array
    },
    methods: {
        deletemot(mot) {
            this.$emit('supp', mot)
        },
    },
}
</script>

<style>
.redim{
    width: 1rem;
    margin-left: 0.3rem;
}
</style>