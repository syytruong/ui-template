<template>
    <div class="main-container">
        <user-list></user-list>
        <skills-list :username="username"></skills-list>
    </div>
</template>

<script>
import UserList from './components/UserList.vue'
import SkillsList from './components/SkillsList.vue'

export default {
    name: 'MainLayout',
    components: {
        UserList,
        SkillsList,
    },
    props: {
        username: String,
    }
}
</script>

<style>
  .main-container {
    display: flex;
    height: 100%;
    border: 1px solid #000;
    min-height: 600px;
  }

  .user-list {
    width: 25%;
  }

  .skills-list {
    width: 75%;
  }
</style>