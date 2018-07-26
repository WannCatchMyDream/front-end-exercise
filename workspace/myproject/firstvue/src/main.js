//引入vue
import Vue from 'vue';

//引入App.vue
import App from './App.vue';
//new vue
new vue({
  //目的地
  el: '#app',
  //渲染内容
  render: c=>c(App)
})
