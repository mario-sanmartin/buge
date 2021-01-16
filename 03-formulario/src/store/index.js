import { createStore } from 'vuex'

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
    },
    mutTarea(state,payload){
      // Busca algo dentro de nuestro array
      state.tarea = state.tareas.find(item => item.id === payload)
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
    }
  },
  modules: {
  }
})
