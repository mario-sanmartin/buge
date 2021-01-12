import { createStore } from 'vuex'

export default createStore({
  state: {
    // equivalente al data
    contador: 101
  },
  mutations: {
    // la unica forma de modifcar el state
    incrementar(state,payload){
      state.contador = state.contador + payload
    },
    disminuir(state,payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit},valor){
      commit('disminuir',valor)
    },
    accionBtn({commit},objeto){
      if(objeto.estado){
        commit('incrementar',objeto.numero)
      }else {
        commit('disminuir',objeto.numero)
      }
    }
  },
  modules: {
  }
})
