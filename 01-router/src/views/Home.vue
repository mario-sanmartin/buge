<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/face.jpeg">
    <titulo texto="Pagina de Inicio" />
  </div>
</template>

<script>
import titulo from '../components/Titulo';

export default {
  name: 'Home',
  components: {
    titulo
  }
}
</script>

<style scoped>
img{
    margin-top: 10px;
       height: auto; 
       width: auto; 
       max-width: 200px; 
       max-height: 200px;
       border-radius: 50px;
}
</style>
