<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>Mi contador: {{$store.state.contador}}</h1> -->
    <h1
      :style="colorContador"
    >
     {{titulo}} | Contador desde Vuex: {{contador}}
    </h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      titulo: 'Susano de Itachy'
    }
  },
  // Al mapear el esta siempre ira en el una propiedad Computada
  computed:{
    // esto recibe un array porque tendremos multiples state
    ...mapState(['contador']),
    // Los 3 puntos son el operador de propagación de js
    colorContador(){
     return [this.contador > 100 ? {'color':'green'}:{'color':'red'}]
    }

  }
}
</script>
