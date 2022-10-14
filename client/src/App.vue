<template>


  <router-view :PostData='PostData' />
</template>

<script>




export default {
  name: 'App',
  data() {
    return {

    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  width: 70%;
  transform: translateX(15%);
}
</style>
