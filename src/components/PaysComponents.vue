<script setup>
import { ref } from 'vue';

let tab = ref([])

let url = 'http://localhost:5173/src/components/ressource/listePays.json'

async function MyFectchFonction() {
    let fetchvar = await fetch(url)
    tab.value = await fetchvar.json()

}

MyFectchFonction()

</script>


<template>

<div>
    <table>
        <thead>
          <tr >
            <th>
                Nom   
            </th>
            <th>
                drapeau  
            </th>
      
        </tr>
        </thead>
        <tbody>
          <tr v-for="pays in tab" :key="pays">
            <td>{{ pays.nom }}</td>
           <td>
              <RouterLink :to="`/show-pays/${pays.id}`">Voir</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
</div>
<RouterView></RouterView>
</template>


<style scoped>
    

</style>