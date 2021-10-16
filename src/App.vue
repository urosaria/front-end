<template>
  <div id="app">
    <div style="margin: 0.5rem">
      Back-end server URL: <input type="text" ref="input" id="backend" value="http://127.0.0.1:3000" />
      <button v-on:click="backend()" style="margin-left: 5px; border: 1px solid #333;">Connect</button>
    </div>
    <Employee :msg="this.host" v-if="loading" />
  </div>
</template>

<script>
import Employee from './components/Employee.vue'

export default {
  name: 'App',
  metaInfo: {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
  data: () => ({
    host: '',
    loading: false,
  }),
  components: {
    Employee
  },mounted() {
    const backend = document.getElementById('backend').value;
    this.host = backend;
  },
  methods: {
    backend: function () {
      this.loading = !this.loading;
    },
  }
}
</script>

<style>
#app {
}
* {font-size:12px;box-sizing: border-box;}
a {text-decoration: none;}
body{margin:0;background-color: #ddd; }
button{border:none;}

dl, ol, ul{margin-top: 0;padding: 0;margin-bottom: 1rem;}
li {list-style: none;}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {margin-bottom: .30em;font-weight: 500;line-height: 1.1;font-family: sans-serif;}
.h1, h1 { font-size: 2.4rem; font-weight: 500;}
.h2, h2 { font-size: 1.75rem;}
.h3, h3 {font-size: 1.5rem;}
.h4, h4 {font-size: 1.125rem;}
.h5, h5 {font-size: 1rem;}
.h6, h6 {font-size: .875rem;}
</style>
