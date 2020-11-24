<template>
  <div class="hello">
    <h1>Users</h1>
    <div>
      <p v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong>
        <br />
        {{ user.email }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  mounted () {
    axios.get('/api/users').then(res => {
      this.users = res.data.users
    })

    axios.get('/api/products')

    // vai falhar
    axios.get('/api/about')
      .catch(err => console.log('DEU RUIM: ', err.response.data))
  }
}
</script>