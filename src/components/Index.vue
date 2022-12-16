<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <div class="col-6 p">
                    <lista />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import Lista from './Lista.vue'

export default{
    components:{
        Lista
    },
    name: 'Index',
    methods:{
        ...mapMutations([
            'setLista'
        ]),
        ...mapActions({
            fetchLista:(dispatch, payload) =>{
                dispatch('fetchLista', payload)
            }
        })
    },
    created(){
        this.fetchLista()
    }
}
</script>