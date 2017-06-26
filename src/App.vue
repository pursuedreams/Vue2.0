<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.split{
  width:100%;
  height:8px;
  background:#f5f5f5;
}
.split-666{
  border-bottom:1px solid #f5f5f5;
  width:100%;
  height:40px;
  line-height:40px;
  color:#666;
}
.split-666{
  display:flex;
  text-align:center;
}
.split-666 .mock-a{
   flex:1;
}
.router-link-active{
  color:#2984e2;
}
</style>
