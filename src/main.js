/*
 * @Author: shintarou.chou shintarou.chou@gmail.com
 * @Date: 2022-10-25 17:34:51
 * @LastEditors: shintarou.chou shintarou.chou@gmail.com
 * @LastEditTime: 2022-12-15 15:34:24
 * @FilePath: /vue-demo-1/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import App from "./App.vue";
const Vue = window.Vue;

Vue.config.productionTip = false;

new Vue({
  components: {
    abc: App,
  },
  data() {
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  template: `
  <div class="red">
  {{n}}
  <button @click="add">+1</button>
  <hr>
  {{array.filter(i => i%2===0)}}
  </div>
  `,
  methods: {
    add() {
      this.n += 1;
    },
  },
}).$mount("#app");
