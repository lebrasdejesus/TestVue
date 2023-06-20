<template>
  <div class="container">
    <div></div>
    <div ><img class="logo" alt="Vue logo" src="../assets/logo.png"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div><a href="./components/contenu1.vue" target="_blank" rel="noopener">Contenu</a></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'NavB',
}
</script>

<style>
.container {
  width: 100wv;
  height: 8vh;
  max-height: 8vh;
  background-color: white;
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
  border: 2px solid red;
}
.container > div{
  padding: 0px 0px;
  background-color: #8be5bc;
  border: 2px solid RGB(120,40,160);
}
.logo{
  max-height: 7vh;
}
</style>

