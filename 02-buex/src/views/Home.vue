<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>Mi contador: {{$store.state.contador}}</h1> -->
    <h1
      :style="colorContador"
    >
     {{titulo}} | Contador desde Vuex: {{contador}}
    </h1>
    <button @click="accionIncrementar">:)</button>
    <btn-disminuir/>
    <hr>
    <btn-accion  :estado="true"/>
    <btn-accion :estado="false"/>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import btnDisminuir from '../components/BtnDisminuir';
import btnAccion from '../components/btnAccion';

export default {
  name: 'Home',
  components: {
    btnDisminuir,btnAccion
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
  },
  methods:{
    // las mutations se mapean aqui , pero esto nunca lo realizaremos
    //ya que las action descencadena a las mutaciones y estas a su vez solo modifican el state
    // ...mapMutations(['incrementar','disminuir'])
    //Las actions igual
    ...mapActions(['accionIncrementar'])

  }
}
</script>
