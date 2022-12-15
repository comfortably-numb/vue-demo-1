/*
 * @Author: shintarou.chou shintarou.chou@gmail.com
 * @Date: 2022-10-25 17:34:51
 * @LastEditors: shintarou.chou shintarou.chou@gmail.com
 * @LastEditTime: 2022-12-15 16:07:10
 * @FilePath: /vue-demo-1/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Demo from "./components/LifeCycleDemo.vue";
const Vue = window.Vue;

Vue.config.productionTip = false;

new Vue({
  components: { Demo },
  data: {
    visible: true,
  },
  template: `
  <div>
  <button @click="toggle">toggle</button>
  <hr><Demo v-if="visible===true"></Demo></div>
  `,
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
}).$mount("#app");
