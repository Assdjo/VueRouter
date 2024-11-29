<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// creation d'une instance de vue routeur

const router = useRouter()
console.log(router)
const email = ref('')
const password = ref('')
const url = 'http://localhost:5173/src/components/ressource/user-data.json'
let tab = ref([])
const user = ref('')

//fonction qui recupères les donnéss des utilisateurs 
  async function  Myfetchfunction() {
    try {
        let fetchvar = await fetch(url)
     tab.value = await fetchvar.json()
     console.log(tab.value)
    }    
    catch (error) {
        console.log(error)
    }
  }





function connectUser() {
    Myfetchfunction()
console.log(tab.value)
user.value= tab.value.filter(el=>el.email == email.value)
console.log(user.value)
if (user.value.length>0) {
    if (password.value == user.value[0].password) {
       if (user.value[0].isadmin == true) {
        console.log('connexion reussie, vous etes un admin')
        router.push(`/dashboard/${user.value[0].nom}`)
       } else {
        console.log('connexion reussie, vous etes un Agent')
        router.push('/userview')
       }
        
    }else {
    console.log('connexion echouée')
     router.push('/error')

}
} 
}


function MySubmitFunc() {
    connectUser()
    console.log(email.value)
    console.log(password.value)
    email.value = ''
    password.value= ''
}

MySubmitFunc()
</script>


<template>

<div>
<form @submit.prevent="MySubmitFunc">
    <h2>connexion</h2>
    <input type="text" required v-model="email" name="email" id="email" value="" placeholder="votre email ici"><br>
    <input type="password" required v-model="password" name="motdepasse" value="" id="motdepasse" placeholder="entrez votre mot de passe"><br>
    <input type="checkbox" name="checkbox" id="checkbox"><span>Remenber me</span><br>
    <button type="submit" class="button">Login</button><br>
    <p class="oublie">mot de passe oublier ?</p>
    <p  class="new">Vous etes nouveau ici ? <RouterLink class="RouterLink" :to="`/signup`">S'inscrire</RouterLink></p> 
    <RouterView></RouterView>
</form>




</div>

</template>


<style scoped>
   div {
        width: 100%;
        height: 100vh;
        background-color: rgb(1, 103, 187);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Montserrat-ExtraLight;
        color: white;
    }
    h2 {
        font-family: Montserrat-ExtraBold;
    }
    #email,
    #motdepasse{
        font-family: Montserrat-ExtraLight;
        background-color: rgb(1, 28, 83);
        border-radius: 20px;
        padding: 10px;
        margin: 3px;
        border: 1px solid white;
        width: 90%;
        color: white;


    }

    .RouterLink{
        text-decoration: none;
        font-family: Montserrat-ExtraBold;
        color: white;
    }

    .oublie, .new, span{
        font-size: 0.7em;
    }
    
    .button {
        
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0);
        padding: 10px;
        color: white;
        font-family: Montserrat-ExtraBold;
        border-radius: 18px;
        margin: 10px;
        width: 90%;
        
    }
    form {
        background-color: rgb(1, 28, 83);
        width: 30%;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 0px 4px 10px rgb(39, 39, 39);
    }
    @font-face {
        font-family: Montserrat-ExtraLight;
        src: url(../montserratFont/Montserrat-Light.ttf);
    }
    @font-face {
        font-family: Montserrat-ExtraBold;
        src: url(../montserratFont/Montserrat-ExtraBold.ttf);
    }
</style>