<template>
  <button
  @click="accionBtn({estado: estado,numero: 10})"
  >
      {{textoBtn}}
  </button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props:{
        estado : Boolean
    },
    computed:{
        textoBtn(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    },
    methods:{
        ...mapActions(['accionBtn'])
    }

}
</script>

<style>

</style>