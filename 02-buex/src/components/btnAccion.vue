<template>
  <button>{{textoBtn}}</button>
</template>

<script>
export default {
    props:{
        estado : Boolean
    },
    computed:{
        textoBtn(){
            return this.estado ? 'Aumentar' : 'Disminuir'
        }
    }
}
</script>

<style>

</style>