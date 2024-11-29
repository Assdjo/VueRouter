import { createRouter, createWebHistory } from "vue-router";


const routes = [
   
   
    
    {path : '/signup', component: ()=> import('./views/auth/signupView.vue')},
    {path : '/', component: ()=> import('./views/auth/LoginView.vue')},
    
    {path : '/userview', component: ()=> import('./views/UserView.vue')},

    {path : '/dashboard/:idadmin', component: ()=> import('./views/DashboardView.vue'),
        // beforeEnter :(to, from) => {
        //     if (condition) {
                
        //     } else {
                
        //     }
        // },
        children : [
            {path : '/connexion/:idadmin', name:'PageConnexion', component: ()=> import('./components/PageConnexionComponents.vue')},
            {path : '/todolist/:idadmin', component: ()=> import('./components/TodoListComponent.vue')},
            {path : '/listpays/:idadmin', component: ()=> import('./components/PaysComponents.vue')},
            {path : '/allusers/:idadmin', component: ()=> import('./components/AllUsersComponent.vue')},
            {path : '/show-user/:id', name: 'show-user', component: ()=> import('./components/ShowUser.vue')},
            {path : '/show-pays/:id', name: 'shox-pays', component: ()=> import('./components/showPays.vue')}
        ]
    },
    {path : '/:pathMatch(.*)*', component: ()=> import('./views/auth/404Component.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})





export default router;

