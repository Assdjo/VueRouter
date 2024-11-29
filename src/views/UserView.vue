<script setup>
import { onBeforeRouteLeave } from 'vue-router';



onBeforeRouteLeave((to, from)=>{
   const answer = window.confirm('Voulez vous quitter cette page ?')
  if(!answer) return false
})

</script>


<template>

<div>

<p>La vue des utilisateurs Lambda</p>
</div>

</template>


<style scoped>


</style>p