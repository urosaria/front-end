<template>
  <div id="app">
    <Employee />
  </div>
</template>

<script>
import Employee from './components/Employee.vue'

export default {
  name: 'App',
  metaInfo: {
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  },
  components: {
    Employee
  },
}
</script>

<style>
/*-------- Font-Family-------*/
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap');
/*-------- common-css -------*/

* {font-size:12px;box-sizing: border-box;}
a {text-decoration: none;}
body{margin:0;background-color: #ddd;font-family: 'Roboto', sans-serif;}
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
