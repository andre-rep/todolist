import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        lista:[]
    },
    getters:{
        itens(state){
            return state.lista
        }
    },
    mutations:{
        setLista:(state, payload) => {
            state.lista = payload
        },
        addItem:(state, payload) => {
            state.lista.push(payload)
        },
        removeItem:(state, payload) => {
            state.lista.splice(payload, 1)
        }
    },
    actions:{
        fetchLista(context){
            fetch('http://localhost:3000/lista')
                .then(response => response.json())
                .then(dados => context.commit('setLista', dados))
        }
    }
})