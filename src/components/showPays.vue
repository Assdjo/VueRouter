<script setup>
    import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

    const route = useRoute()
    const paysId = ref(null)
    const pays = ref ([])
    const loading = ref(true)
    let url = 'http://localhost:5173/src/components/ressource/listePays.json'

    let tab = ref([])

    async function  Myfetchfunction(id) {
    try {
        let fetchvar = await fetch(url)
     tab.value = await fetchvar.json()
   
    pays.value = tab.value.filter(u=>u.id == id)

        loading.value = false
    } catch(error){
        console.error();
        
    }

    }

    Myfetchfunction()

    onMounted(()=>{
        paysId.value = route.params.id
        Myfetchfunction(paysId.value)
    })

</script>


<template>

<div v-if=" !loading">
    <h1>Les informations de {{ pays[0]?.nom}}</h1>
    <ul>
        <li>Nom : <h2>{{  pays[0]?.nom }}</h2></li>
        <li>drapeau:<img :src="pays[0]?.drapeau" :alt="pays[0]?.nom"></li>
       
        
    </ul>
</div>

</template>


<style scoped>


</style>