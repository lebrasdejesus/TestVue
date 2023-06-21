<template>
  <div class="container">
    <div></div>
    <div><a href="#/"><img class="logo" alt="Vue logo" src="../assets/logo.png"></a></div>
    <div></div>
    <div></div>
    <div></div>
    <div><a href="#/contenu1">Contenu1</a></div>
    <div><a href="#/contenu2">Contenu2</a></div>
    <div></div>
    <div></div>
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
}
.container > div{
  padding: 0px 0px;
  background-color: #8be5bc;
  border: 2px solid #2c3e50;
}
.logo{
  max-height: 7vh;
}
</style>

