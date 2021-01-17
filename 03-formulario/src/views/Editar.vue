<template>
  <div>
      <h1>{{$route.params.id}}</h1>
      <h2>{{tarea}}</h2>
      <form @submit.prevent="editarTarea(tarea)">
        <Input :tarea="tarea"/>
      </form>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Input from '../components/Input';
export default {
  components:{
    Input
  },
  computed:{
    ...mapState(['tarea'])
  },
  methods:{
    ...mapActions(['setTarea','editarTarea'])
  },
  created(){
    this.setTarea(this.$route.params.id)
  }
}
</script>

<style>

</style>