<template>
  <div>
      <form
      @submit.prevent="procesarFormulario"
    >
    <Input :tarea="tarea"/>
    </form>
    <hr>
    <listar-tareas />
  </div>
</template>

<script>
import Input from '../components/Input';
import ListarTareas from '../components/ListarTareas';
import {mapActions} from 'vuex';
//Generar id automatica
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input,ListarTareas
  },
  data(){
    return{
      tarea:{
        id:'',
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim()===""){
        console.log('Campito Vacio')
        return
      }else {
        console.log('no esta vacio')


      //generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id);
      //enviar datos
      this.setTareas(this.tarea)
        this.tarea={
          id:'',
        nombre:'',
        categoria:[],
        estado:'',
        numero:0
        }
      }
    }
  }

}
</script>
