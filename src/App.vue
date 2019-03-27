<template>
  <div id="app">
    <!-- <router-view></router-view>-->
    <b-container class="fullscreen" fluid>
      <b-row align-v="start">
        <b-col align-self="center">
          <u>DEMO</u>
        </b-col>
        <b-col align-self="center">术语搜索引擎</b-col>
        <b-col align-self="center">
          <u>GUO</u>
        </b-col>
      </b-row>

      <b-row align-v="center" v-if="!position">
        <b-col cols="12" class="search">
          <h1>术语搜索引擎</h1>
          <SearchBox v-on:match="_switch"></SearchBox>
        </b-col>
      </b-row>
      <b-row v-if="position">
        <b-col cols="12" class="detail">
          <div>
            <b-button class="inline" @click="_switch">Back</b-button>
            <h2 class="detail_title">术语{{keyword}}搜索详情</h2>
          </div>
          <Detail :abbr="keyword"></Detail>
        </b-col>
      </b-row>

      <b-row align-v="end">
        <b-col>
          <b-badge>Vue.JS</b-badge>
        </b-col>
        <b-col>@Copyright 2019 GUO</b-col>
        <b-col>
          <b-badge>Bootstrap-vue</b-badge>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchBox from "./components/SearchForm.vue";
import Detail from "./components/Detail.vue";

/*var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})*/

export default {
  name: "app",
  data: function() {
    return {
      position: false, //0,
      keyword: ""
    };
  },
  components: {
    SearchBox,
    Detail
  },
  methods: {
    _switch(keyword) {
      if (this.position == false) {
        this.keyword = keyword;
        this.position = true;
      } else {
        this.position = false;
      }
    }
  },
  created() {
    document.onkeydown = e => {
      if (this.position == true && e.keyCode == 27) {
        this.position = false;
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fullscreen {
  height: 100vh;
}
.fullscreen > div:nth-child(1) {
  height: 5vh;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #6f747938;
}
.fullscreen > div:nth-child(2) {
  height: 90vh;
}
.fullscreen > div:nth-child(3) {
  height: 5vh;
  margin-top: -12px;
}

.search {
  margin-top: -120px;
}

.inline {
  display: inline-block;
}
.detail_title {
  text-align: left;
  margin-top: 12px;
  margin-left: 16px;
  display: inline-block;
  margin-bottom: 0px;
  vertical-align: bottom;
}
</style>
