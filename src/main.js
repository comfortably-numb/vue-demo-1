/*
 * @Author: shintarou.chou shintarou.chou@gmail.com
 * @Date: 2022-10-25 17:34:51
 * @LastEditors: shintarou.chou shintarou.chou@gmail.com
 * @LastEditTime: 2022-12-15 16:35:10
 * @FilePath: /vue-demo-1/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import LifeCycleDemo from "./components/LifeCycleDemo.vue";
import PropsDemo from "./components/PropsDemo.vue";
const Vue = window.Vue;

Vue.config.productionTip = false;

new Vue({
  components: { LifeCycleDemo, PropsDemo },
  data: {
    visible: true,
  },
  template: `
  <div>
  <button @click="toggle">toggle</button>
  <hr><LifeCycleDemo v-if="visible===true"></LifeCycleDemo>
  <PropsDemo :fn="toggle"/>
  <PropsDemo :message="this.visible" :fn="toggle"/>
  </div>

  `,
  methods: {
    toggle() {
      this.visible = !this.visible;
      console.log("called");
    },
  },
}).$mount("#app");
