<script setup>
// import PageConnexion from './components/PageConnexionComponents.vue'
// import TodoList from './components/TodoListComponent.vue'
// import ListPays from './components/PaysComponents.vue'
import { onMounted, ref} from 'vue'
import { useRoute, useRouter} from "vue-router";

// import TodoListComponent from './components/TodoListComponent.vue';

// const componentName = shallowRef(TodoList)

let rue = useRoute()
let route = useRouter()
console.log(route)
const idComponent = ref(0)
const ajoutStyle = 'background-color : green; color : white'
let userId = ref(0);  
// const navigation = [
//   {
//     id: 0,
//     name: 'Liste de languages',
//     component: TodoList
//   },
//   {
//     id: 1,
//     name: 'Liste de pays',
//     component: ListPays
//   },
//   {
//     id: 2,
//     name: 'Page de Connexion',
//     component: PageConnexion
//   }
// ]
const navigation = [
  {
    id: 0,
    name: 'Liste de languages',
    path: `/todolist/${userId.value}`
  },
  {
    id: 1,
    name: 'Liste de pays',
    path: '/listpays/:idadmin'
  },
  {
    id: 2,
    name: 'Page de Connexion',
    path: '/connexion/:idadmin'
  },
  {
    id: 3,
    name: 'All users',
    path: '/allusers/:idadmin'
  },
]


  onMounted(()=>{
    console.log(rue)
  userId.value = rue.params.idadmin 
  })

function DeconnexionFunc() {
  route.replace('/')
}

// onBeforeRouteEnter
// const afficheComponent = (param, id) => {
//   componentName.value = param
//   idComponent.value = id
// }
</script>

<template>
  <div>
    <header class="header">
      <h1>Bienvenue à toi {{userId}}</h1>
      <nav class="container-button">
        <!-- <button 
        :style="idComponent == nav.id ? ajoutStyle: ''"
        v-for="nav in navigation"
        :key="nav"
        @click="afficheComponent(nav.component, nav.id);"
        >
        {{ nav.name }}
        </button> -->
        <ul class="container-button-nav">
          <li>
            <RouterLink
              :style="idComponent == nav.id ? ajoutStyle : ''"
              v-for="nav in navigation"
              :key="nav"
              :to="nav.path"
              @click="idComponent = nav.id"
            >
              {{ nav.name }}
            </RouterLink>
            
          </li>
          <li>
            <form @submit.prevent="DeconnexionFunc">
              <button>Deconnexion</button>
            </form>
            
          </li>
        </ul>
      </nav>
    </header>
    
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
div {
  font-family: Montserrat-Light;
}
.container-button-nav{
      display: flex;
      justify-content: right; 
      margin-right: 10px;
}

li {
  list-style: none;
}
.container-button a, .container-button button {
  text-align: right;
  text-decoration: none;
  color: black;
  margin-left: 20px;
  padding-block: 6px;
  padding-inline: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

@font-face {
        font-family: Montserrat-Light;
        src: url(./montserratFont/Montserrat-Light.ttf);
    }
    @font-face {
        font-family: Montserrat-ExtraBold;
        src: url(./montserratFont/Montserrat-ExtraBold.ttf);
    }
</style>