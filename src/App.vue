<template>
  <div id="app">
    <div class="main-container">
      <user-list></user-list>
      <!-- <skills-list></skills-list> -->
    </div>
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
// import SkillsList from './components/SkillsList.vue'

export default {
  name: 'App',
  components: {
    UserList,
    // SkillsList
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;  
  }

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
