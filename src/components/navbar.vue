<template>
  <div class="containerNavbar">
    <div></div>
    <div><a href="#/"><img class="logo" alt="Vue logo" src="../assets/logo.png"></a></div>
    <div></div>
    <div></div>
    <div class="menu"><a href="#/contenu1">Contenu1</a></div>
    <div class="menu"><a href="#/contenu2">Contenu2</a></div>
    <div class="menu"><a href="#/contenu3">Contenu3</a></div>
    <div class="menu"><a href="#/contenu4">Contenu4</a></div>
    <div class="menu"><a href="#/contenu5">Contenu5</a></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'NavB',
}
</script>

<style>
.containerNavbar {
  width: 100wv;
  height: 8vh;
  max-height: 8vh;
  background-color: white;
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 0.5fr;
}

.containerNavbar>div {
  padding: 0px 0px;
  background-color: #8be5bc;
  /* border: 2px solid #2c3e50; */
}

.logo {
  max-height: 7vh;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  font-weight: bold;
}
</style>

