<template>
    <div>
        <input type="text" v-model="newValue" placeholder="new Item">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th></th>
                </tr>
            </thead>
            <item 
                v-for="(item, indice) in todosItens" 
                :key="indice"
                :dados="item"
                :indice="indice"
            />
        </table>
        <div class="col-1">
            <button class="btn btn-primary" @click="adicionarItem">Adicionar</button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
import Item from '@/components/Item.vue'
export default{
    name: 'Lista',
    data:()=>({
        newValue:''
    }),
    components:{
        Item
    },
    computed:{
        ...mapState({
            lista:state => state
        }),
        ...mapGetters({
            itens:'itens'
        }),
        todosItens(){
            return this.itens
        }
    },
    methods:{
        ...mapMutations({
            addItem:(commit, payload) =>{
                commit('addItem', payload)
            }
        }),
        adicionarItem(){
            this.addItem(this.newValue)
        }
    }
}
</script>