<template>
  <div class="container">
    <router-link class="link" to="/users">Users</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 80%;
  text-align: center;
  .link {
    margin: 0 1rem;
  }
}
</style>

