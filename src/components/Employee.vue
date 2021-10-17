<template>
  <section>
    <div id="header">
      <div class="wrapper">
        <div class="section-intro">
          <h2 class="font-weight">MEET THE TEAM</h2>
        </div>
        <ul class="filter" v-show="show">
          <li><button v-on:click="deptApiCall('')" :class = "[dept==='' ? 'font-weight' : '']" >All</button></li>
          <li><button v-on:click="deptApiCall('Sales')" :class = "[dept==='Sales' ? 'font-weight' : '']" >Sales</button></li>
          <li><button v-on:click="deptApiCall('Marketing')" :class = "[dept==='Marketing' ? 'font-weight' : '']" >Marketing</button></li>
          <li><button v-on:click="deptApiCall('IT')" :class = "[dept==='IT' ? 'font-weight' : '']" >IT</button></li>
          <li><button v-on:click="deptApiCall('HR')" :class = "[dept==='HR' ? 'font-weight' : '']" >HR</button></li>
        </ul>
      </div>
    </div>

    <div class="loading" v-if="isLoading">
      <div class="loadingBox">
        <div class="dim"></div>
        <div class="circle"></div>
      </div>
    </div>

    <div class="backend" v-show="!show">
        Back-end server: <input type="text" ref="input" id="backend" class="form-control" placeholder="http://{host}:3000" />
        <button v-on:click="backend()" class="form-btn">Connect</button>
        <div v-show="isError" style="font-size: 1.5rem; margin: 1rem"> Check server connection. </div>
    </div>

    <div class="card-carousel" id="employee">
      <div class="item" v-for="(item, i) in items" :key="i">
        <div class="pcard" :class="{on: i === activeItem, off: i === preActiveItem}">
          <div class="pic">
            <img :src="item.picture" class="pprofile" :class="[i !== activeItem || activeProfile === true ? 'visible':'invisible']" />
            <img :src="`https://maps.googleapis.com/maps/api/staticmap?zoom=12&amp;size=228x228&amp;maptype=roadmap&amp;&amp;markers=${item.name},${item.name}&amp;key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`" class="pmap" :class="[i === activeItem && activeProfile === false ? 'visible':'invisible']" />

            <div class="button">
              <a href="#" @click="toggle()" class="bprofile" v-show="isActive">
                <font-awesome-icon icon="user" />
              </a>
              <a href="#" @click="toggle()" class="bmap"  v-show="!isActive">
                <font-awesome-icon icon="map-marked-alt" />
              </a>
            </div>
          </div>
          <ul>
            <li class="name"><strong>{{ item.name }}</strong></li>
            <li>{{ item.dept }} | {{ item.position }} </li>
            <li>{{ item.email }} </li>
            <li>{{ item.desc }} </li>
            <li> <font-awesome-icon icon="map-marked-alt" /> {{ item.location.city }}, {{ item.location.state }}, {{ item.location.country }}</li>
          </ul>
          <div class="btn" v-on:click="details(i)"><a href="#">Detail</a></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {jsonp} from "vue-jsonp";
import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faMapMarkedAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: 'Employee',
  data: () => ({
    isLoading: false,
    isError: false,
    dept: '',
    preActiveItem: null,
    activeItem: null,
    activeProfile: true,
    isActive:  false,
    items: '',
    limit: 0,
    show: false,
    errorStatus: '',
  }),
  mounted() {
    const container = document.querySelector('#employee');
    let offset = 0;
    window.addEventListener('wheel', (e) => {
      offset += Math.sign(e.deltaY) * 60;
      if (offset < 0) {
        offset = 0;
      } else if (offset > container.scrollWidth - window.innerWidth) {
        offset = container.scrollWidth - window.innerWidth;
      }
      container.scrollLeft=offset;
      //container.style.transform = `translateX(-${offset}px`;
      if(container.scrollLeft + container.clientWidth >= container.scrollWidth && !this.isLoading && this.show) {
        container.style.justifyContent = 'flex-start';
        this.isLoading = true;
        setTimeout(this.infiniteHandler, 500);
      }
    });
    container.addEventListener('scroll', () => {
      if(container.scrollLeft + container.clientWidth >= container.scrollWidth && !this.isLoading && this.show) {
        container.style.justifyContent = 'flex-start';
        this.isLoading = true;
        setTimeout(this.infiniteHandler, 500);
      }
    });
  },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive;
      this.activeProfile = !this.activeProfile;
    },
    async infiniteHandler(url = this.host) {
      if(this.dept !== '') {
        url = url+'/dept/'+this.dept;
      }
      await jsonp(url).then((data) => {
        if(data.users.length) {
          this.items.push(...data.users);
          this.isLoading = false;
        } else {
          //$state.complete()
        }
      }, function(error) {
        this.isError=true;
        this.errorStatus = error.status;
      });
    },
    callAPI: async function (url = this.host) {
      try {
        if(this.dept !== '') {
          url = url+'/dept/'+this.dept;
        }
        await jsonp(url).then((data) => {
          console.log(data);
          this.activeItem = null;
          this.items = data.users;
          this.isLoading=false;
          this.show=true;
        }, function(error) {
          console.log(error.status);
          this.isError=true;
        });
      } catch (error) {
        console.log(error.status);
        this.isError=true;
      } finally {
        this.isLoading=false;
      }
    },
    deptApiCall: function (dept){
      this.dept = dept;
      this.show = true;
      const container = document.querySelector('#employee');
      container.style.justifyContent = 'center';
      this.callAPI();
    },
    details: function (i){
      this.preActiveItem = this.activeItem;
      this.activeItem = i;
      this.activeProfile=true;
    },
    backend: function () {
      const backend = document.getElementById('backend').value;
      this.isLoading=true;
      this.host = backend;
      this.callAPI();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#header {font-weight: bold; margin:3rem 1rem 3rem 1rem;}
div#header .wrapper {width: 100%; justify-content: space-between; align-items: center; margin-bottom:1rem;text-align: center;}
div#header .wrapper .section-intro h2:after {content: ''; display: block; height: .3rem; width: 6rem; background: #000; margin: 1rem auto 2rem;}
div#header .wrapper ul {display: flex; width:500px; margin:0 auto;justify-content: space-around}
div#header .wrapper ul li {margin: 0.5rem}
div#header .wrapper ul li button{padding:1rem 2rem;font-size:1rem;transition: all ease-in-out 0.5s;color:black;background-color:white;}
div#header .wrapper ul li button.font-weight {padding:1rem 3rem;letter-spacing:0.5rem;font-weight: bold;color:white;background-color:#222;}

@media screen and (max-width: 767px) {
  div#header {font-weight: bold; margin: 0!important; position: fixed; top: 0; left: 0; right: 0; z-index: 9;box-shadow: 2px 3px 4.7px 0.3px rgb(0 0 0 / 24%);background-color: #dddddd;}
  div#header .wrapper ul {display: flex; width:90%; margin:0 auto;justify-content: space-around}
  div#header .wrapper ul li {margin: 0.3rem}
  div#header .wrapper .section-intro h2:after {height: .3rem; margin: 0.5rem auto 1rem;}
  div#header .wrapper ul li button{padding: 0.7rem 1rem}
  div#header .wrapper ul li button.font-weight {padding: 0.7rem 1rem}
  div#employee {padding: 150px 10px 0 10px; height: 100%;}
  .form-control {width: 40% !important;}
  .backend {position: relative; top: 100px}
}

.item{margin:auto 3px;}

/* pcard */
.pcard{width:100%;height:12rem;margin-bottom:1rem;opacity: 1;filter:none;-webkit-filter:grayscale(0%);overflow:hidden;transition: all ease-in-out 0.5s;border:solid 1px rgba(0,0,0,0.5);box-shadow: 2px 2px 5px rgba(0,0,0,0.5);border-radius: 5px;background-color:white;}

.pcard>ul{position:absolute;width:100%;right:0;top:0;padding:0.5rem 0.5rem 0.5rem 13rem;list-style: none;margin:0;transition: all ease-in-out 0.5s;}
.pcard>ul>li{padding:0 0 4px 0;margin:0;font-size:14px;/*line-height:1.2em;*/color:#444;overflow: hidden; /*white-space: nowrap;*/text-overflow: ellipsis;}
.pcard>ul>li.name{color:#222;font-size:1rem; font-weight: bold;line-height:1.5rem}
.pcard>ul>li.name>strong{font-size:20px;}
.pcard>ul>li.emil{color:#222;font-size:11px;}
.pcard>ul>li.partinfo{font-size:12px;}


@media (min-width:768px) {
  section {margin:3rem 0;}
  .card-carousel{position: relative;height:340px;display:flex;overflow-x:auto;height:25rem; padding: 0 3rem;justify-content: center}

  .pcard{width:6.5rem;height:220px;margin-bottom:0;opacity: 0.5;filter:grayscale(100%);-webkit-filter:grayscale(100%);}

  .pcard:hover{width:140px;/*height:330px;*/opacity: 1;filter:none;-webkit-filter:grayscale(0%);}
  .pcard:hover>.btn{bottom:0;right:0;}

  .pcard>ul{padding:13rem 1rem 1rem 1rem;}
  .pcard>ul>li{font-size:11px;}
  .pcard>ul>li.name>strong{font-size:12px;white-space:nowrap;overflow: hidden;text-overflow:ellipsis;}

  .pcard.on>ul{padding:1.5rem 1rem 1rem 20rem;}
  /* pcard effect */
  .pcard.on{
    -webkit-animation-name: detail-on;
    animation-name: detail-on;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .pcard.off{
    -webkit-animation-name: detail-off;
    animation-name: detail-off;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    /*animation-fill-mode: forwards;*/
  }
  .pcard.on>.pic>img{left:0; height: 19rem; width: 19rem; }
  /*.pcard.on>.pic>.pmap {height: 19rem; width: 19rem;}*/
  .pcard.on>.pic>.button{position: absolute;top: 14.5rem;width: 18rem;text-align: right;/*background-color: rgb(68 68 68 / 29%);padding: 5px;*/opacity: 1; z-index: 99;}
  .pcard.on>.pic>.button>a{width: 1.5em;height: 1.5em;line-height: 1.5em;border-radius: 50%;display: inline-block;vertical-align: middle;background: #999797ed;font-size: 1.8rem;color: #ffffff;padding: 0;text-align: center; /*position: absolute;right: 0*/}
  .pcard.on>.pic>.button>a>svg {font-size: 1.5rem}
}

@media (max-width:767px) {
  .pcard.on>ul{padding:1.5rem 1rem 1rem 14rem;}
}

.pcard>.btn{z-index:10;position: absolute; bottom:-30px;right:-100px;width:100px;height:30px;border-radius: 20px 0 0 0;text-align:center;overflow:hidden;transition: all ease-in-out 0.5s;background-color: #444;}
.pcard>.btn>a{font-size:10px;line-height:30px;color:white;display:block;}

.pcard.on>ul>li.name>strong {font-size:1.5rem !important;}
.pcard.on>.btn{
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-name: detail-on-btn;
  animation-name: detail-on-btn;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@-webkit-keyframes detail-on-btn {
  99.99% {
    width:120%;height:120%;border-radius:0;
    bottom:0;
    right:0;
    opacity:1;
  }
  100% {
    width:100px;height:30px;border-radius:0;
    bottom:0;
    right:0;
    opacity:0;
  }
}

/* pcard on pic */
.pcard>.pic{z-index:5;position: relative;/*overflow:hidden;*/transition: all ease-in-out 0.5s;}
.pcard>.pic>img{left:0; position : absolute;width:12rem;height:12rem;transition: all ease-in-out 0.5s;}
.pcard>.pic>.pmap {opacity: 0; }
.pprofile {z-index: 9}

@-webkit-keyframes detail-on {
  0%{}
  19% {
    width:5px;height:240px;opacity: 1;filter:none;-webkit-filter:grayscale(0%);
  }
  49% {
  }
  50% {
    width:537px;height:200px;
  }
  70% {
    width:487px;height:230px;
  }
  100% {
    width:500px;height:220px;opacity: 1;filter:none;-webkit-filter:grayscale(0%);
  }
}
@-webkit-keyframes detail-off {
  0%{
    width:500px;height:220px;opacity: 1;filter:none;-webkit-filter:grayscale(0%);
  }
  40% {
    width:5px;height:240px;opacity: 1;filter:none;-webkit-filter:grayscale(0%);
  }
  70% {
    width:6.5rem;height:220px;
  }
}

@keyframes spinCircle {
  from {
    transform:translate(-50%, -50%) rotate(0);
  }
  to {
    transform:translate(-50%, -50%) rotate(360deg);
  }
}
.loadingBox .circle {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border: 5px solid #fff;
  border-top: 5px solid #333;
  border-radius: 50em;
  -webkit-animation-name: spinCircle;
  animation-name: spinCircle;
  -webkit-animation-duration: .8s;
  animation-duration: .8s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  z-index: 99;
}

.invisible {opacity:0; }
.visible {opacity:1 !important;}

.form-control {width: 25%; padding: .375rem .75rem;font-size: 1rem; font-weight: 400; line-height: 1.5;color: #212529;background-color: #fff;background-clip: padding-box;border: 1px solid #ced4da; border-radius: .25rem;}
.form-btn {display: inline-block;font-weight: 400;line-height: 1.5;color: #212529;text-align: center;text-decoration: none;vertical-align: middle;cursor: pointer;border: 1px solid transparent;padding: .375rem .75rem;font-size: 1rem;border-radius: .25rem; margin-left: 5px}
.backend {width: 100%; text-align: center; }
</style>