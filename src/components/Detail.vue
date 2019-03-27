<template>
  <div>
    <b-nav>
      <b-nav-item active>简介</b-nav-item>
      <b-nav-item disabled>来源</b-nav-item>
      <b-nav-item disabled>更多</b-nav-item>
    </b-nav>
    <b-jumbotron :header="abbr.toUpperCase()" :lead="detail">
      <p>{{detail2}}</p>
      <b-button variant="primary" :href="url" target="_blank">More Info</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
var AV = require("leancloud-storage");
var { Query, User } = AV;
var APP_ID = "Xk0tqPD6k7ze7wp4KFgdvCll-gzGzoHsz";
var APP_KEY = "Kebq7XGmo9jDG4kozpo2Wd5v";//公开也没什么hhh

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
export default {
  props: {
    abbr: String
  },
  data: function() {
    return {
      details: [],
      detail: "",
      detail2: ""
    };
  },
  computed:{
      url:function(){
          return "https://www.baidu.com/s?wd="+this.abbr
      }
  },
  created: function() {
    var query = new AV.Query("Terms");
    query.equalTo("abbr", this.abbr.toLowerCase());
    query.find().then(res => {
      this.details = res;
      this.detail = this.details[0]._serverData.desc;
      this.detail2 = this.details[0]._serverData.desc2;
    }).catch((err)=>{
        this.detail="I'm sorry but your network seems not working..."
        this.detail2="or maybe this term is not collected in my database until now"
    });
  }
};
</script>
