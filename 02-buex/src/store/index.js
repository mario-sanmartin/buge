import { createStore } from 'vuex'

export default createStore({
  state: {
    // equivalente al data
    contador: 101
  },
  mutations: {
    // la unica forma de modifcar el state
    incrementar(state){
      state.contador = state.contador + 10
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
    }
  },
  modules: {
  }
})
