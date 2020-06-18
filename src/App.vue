<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.primary {
  color: #f8991d;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.form {
  width: 400px;
  margin-bottom: 100px;
  border: 1px #ccc solid;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
  .last-item {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 960px) {
    .form {
        width: 70vw;
    }
}
</style>
