import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import UserList from './components/UserList.vue'

// Define routes
const routes = [
    {path: '/users/:username', component: UserList}
];

// Create router instance
const router = createRouter({
    history: createWebHistory,
    routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');
