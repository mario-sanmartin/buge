<template>
  <div>
      <h1>{{$route.params.id}}</h1>
      <h2>{{tarea}}</h2>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  computed:{
    ...mapState(['tarea'])
  },
  methods:{
    ...mapActions(['setTarea'])
  },
  created(){
    this.setTarea(this.$route.params.id)
  }
}
</script>

<style>

</style>