<template>
  <div id="app">
    <header>
      <!-- TODO: Header here -->
    </header>

    <div class="main-container">
      <user-list></user-list>
      <skills-list></skills-list>
    </div>
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import SkillsList from './components/SkillsList.vue'

export default {
  name: 'App',
  components: {
    UserList,
    SkillsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
