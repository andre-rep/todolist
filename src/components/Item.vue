<template>
    <tbody>
        <tr>
            <th scope="row">{{ indice + 1 }}</th>
            <td v-text="dados"></td>
            <td>
                <button class="btn btn-secondary btn-sm" @click="remove">remove</button>
            </td>
        </tr>
    </tbody>
</template>
<script>
import { mapMutations } from 'vuex'
export default{
    name: 'Item',
    props:{
        dados:String,
        indice:Number
    },
    methods:{
        ...mapMutations({
            removeItem:(commit, payload) =>{
                commit('removeItem', payload)
            }
        }),
        remove(){
            this.removeItem(this.indice)
        }
    }
}
</script>