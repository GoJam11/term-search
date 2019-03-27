<template>

<b-container class="search-inline">  
    <b-form-input ref="focusThis" @keyup.enter="$emit('match',keyword)" v-model="keyword" list="my-list-id"/>
    <b-button variant="outline-primary" @click="$emit('match',keyword)">匹配</b-button>
    <datalist id="my-list-id">
      <option v-for="term in terms " :key="term.abbr">{{ term.abbr }}</option>
    </datalist>
  </b-container>

</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      terms: [{abbr:"html"}, {abbr:"css"}, {abbr:"js"}, {abbr:"scss"}],
      keyword:''
    };
  },mounted(){
     this.$refs.focusThis.focus()
      
  }
};
</script>

<style scoped>
.search-inline > * {
  margin-bottom: 12px;
}
.search-inline{
    max-width: 600px;
}
</style>
