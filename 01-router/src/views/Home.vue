<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
