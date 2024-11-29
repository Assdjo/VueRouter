<script setup>
 import { onMounted, ref } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute()
    let userId = ref(null);  
    let users = ref(null)
    const loading = ref(true)

    const url = 'http://localhost:5173/src/components/ressource/user-data.json'
    let tab = ref([])


  async function  Myfetchfunction(id) {
    try {
        let fetchvar = await fetch(url)
     tab.value = await fetchvar.json()
   
    users.value = tab.value.filter(u=>u.id == id)

        loading.value = false
 

    } 
    
    
    catch (error) {
        console.log(error)
    }
  }

  Myfetchfunction()
  onMounted(()=>{
  userId.value = route.params.id
  Myfetchfunction(userId.value)
  
  })
// let id = ref(0);
</script>


<template>

<div v-if=" !loading">
    <h1>Les informations de {{ users[0]?.nom}}</h1>
    <ul>
        <li>Nom : {{  users[0]?.nom }}</li>
        <li>email : {{  users[0]?.email }}</li>
        <li>age : {{  users[0]?.age }}</li>
        
    </ul>
</div>
<div v-else>
    patientez....
</div>

</template>


<style scoped>


</style>