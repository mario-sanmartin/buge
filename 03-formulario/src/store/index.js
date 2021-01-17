import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    tareas:[],
    tarea:{
      id:'',
      nombre:'',
      categoria:[],
      estado:'',
      numero:0
    }
  },
  mutations: {
    set(state,payload){
      state.tareas.push(payload)
      console.log(state.tareas);
    },
    eliminar(state,payload){
      // crear un array nuevo esceptuando el valor eliminado
     state.tareas = state.tareas.filter(item => item.id !== payload)
     console.log('tarea Eliminada');
    },
    mutTarea(state,payload){
      //Si no encuentra nada
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return //para acabar con la ejecucion del codigo
      }
      // Busca algo dentro de nuestro array
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    mutEditar(state,payload){
      // el payload es nuestra tarea modificada
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item )
      console.log('tarea Editada');
      router.push('/')
    }
  },
  actions: {
    setTareas({commit},tarea){
      commit('set',tarea)
    },
    deleteTarea({commit},id){
      commit('eliminar',id)
    },
    setTarea({commit},id){
      commit('mutTarea',id)
    },
    editarTarea({commit},tarea){
      commit('mutEditar',tarea)
    }
  },
  modules: {
  }
})
