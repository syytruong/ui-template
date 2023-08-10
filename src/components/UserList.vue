<template>
    <div class="user-list">
        <div class="user-input">
            <input type="text" v-model="newUser" placeholder="Enter username" @keyup.enter="addUser">
        </div>
    
        <ul>
            <li v-for="user in users" :key="user" :class="{ active: user === activeUser}">
                <router-link :to="`/users/${user}`" @click="setActiveUser(user)">
                    <span>{{ user }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: 'UserList',
    setup() {
        const router = useRouter();
        const newUser = ref('');
        const users = ref([]);
        const activeUser = ref([]);

        const addUser = () => {
            if (newUser.value.trim() !== '' && !users.value.includes(newUser.value)) {
                users.value.push(newUser.value);
                newUser.value = '';
            }
        };

        const setActiveUser = (user) => {
            activeUser.value = user
        };

        return { newUser, users, activeUser, addUser, setActiveUser, router };
    }
}
</script>

<style>
    .user-list {
        border-right: 1px solid #000;
        padding: 10px 0px;
    }

    .user-input {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #000;
        height: 45px;
    }

    .user-input input {
        width: 80%;
        padding: 5px;
        margin-bottom: 10px;
        border-top: none;
        border-left: none;
        border-right: none;
        cursor: pointer;
    }

    .user-input input:focus {
        outline: none;
    }

    ul {
        list-style-type: none;
        padding: 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    li {
        padding: 5px;
        cursor: pointer;
        width: 70%
    }

    li.active {
        border-bottom: 1px solid #000;
    }

    li span {
        font-size: 2.5rem;
    }
</style>