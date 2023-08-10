<template>
    <div class="user-list">
        <input type="text" v-model="newUser" placeholder="Enter username" @keyup.enter="addUser">
    </div>

    <ul>
        <li v-for="(user, index) in users" :key="user + index" :class="{ active: user === activeUser && activeUserIndex === index}">
            <router-link :to="`/users/${user}`" @click="setActiveUser(index, user)">{{ user }}</router-link>
        </li>
    </ul>
</template>

<script>
import { ref } from 'vue'
// import { userRouter } from 'vue-router'

export default {
    name: 'UserList',
    setup() {
        // const router = userRouter();
        const newUser = ref('');
        const users = ref([]);
        const activeUser = ref([]);
        const activeUserIndex = ref(-1);

        const addUser = () => {
            if (newUser.value.trim() !== '') {
                users.value.push(newUser.value);
                newUser.value = '';
            }
        };

        const setActiveUser = (index, user) => {
            activeUserIndex.value = index;
            activeUser.value = user
        };

        return { newUser, users, activeUserIndex, activeUser, addUser, setActiveUser };
    }
}
</script>