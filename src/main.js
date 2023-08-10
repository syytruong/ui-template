import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import MainLayout from './MainLayout.vue'

// Define routes
const routes = [
    {path: '/', component: MainLayout},
    {path: '/users/:username', component: MainLayout, props: route => ({ username: route.params.username })},
];

// Create router instance
const router = createRouter({
    history: createWebHistory,
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
