<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navColor">
      <b-navbar-brand href="#">
        <img v-bind:src="img" width="50"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    </b-navbar>
  </div>
</template>

<script>

const imgLink = require('../assets/logo.png')

export default {
  name: 'Navbar',
  props: {
    title: String
  },
  data(){
        return{
            img: imgLink,
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navColor{
  background: '#0a1b41';
  background-color: #0a1b41;
  color: white;
}
</style>
