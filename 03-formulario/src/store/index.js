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
    cargar(state,payload){
      //el payload seria todo lo que enviamos desde nuestra actions
        state.tareas = payload
    },
    set(state,payload){
      //Crear tarea
      state.tareas.push(payload)
      console.log(state.tareas);
      const tareas = state.tareas
      localStorage.setItem('tareas',JSON.stringify(tareas))
    },
    eliminar(state,payload){
      // crear un array nuevo esceptuando el valor eliminado
     state.tareas = state.tareas.filter(item => item.id !== payload)
     console.log('tarea Eliminada');

     const tareas = state.tareas
     localStorage.setItem('tareas',JSON.stringify(tareas))
    },
    mutTarea(state,payload){
      //Si no encuentra nada -- buscar tarea
      if(!state.tareas.find(item => item.id === payload)){
        router.push('/')
        return //para acabar con la ejecucion del codigo
      }
      // Busca algo dentro de nuestro array
      state.tarea = state.tareas.find(item => item.id === payload)

      const tareas = state.tareas
      localStorage.setItem('tareas',JSON.stringify(tareas))
    },
    mutEditar(state,payload){
      // el payload es nuestra tarea modificada
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item )
      console.log('tarea Editada');
      router.push('/')

      const tareas = state.tareas
      localStorage.setItem('tareas',JSON.stringify(tareas))
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
    },
    cargarLocalStorage({commit}){
      //Si existen carga el array
      if(localStorage.getItem('tareas')){
        const tareas = localStorage.getItem('tareas')
        commit('cargar',JSON.parse(tareas))
        return
      }
      //con esto se crea el array vacio
      localStorage.setItem('tareas',JSON.stringify([]))
    }
  },
  modules: {
  }
})
