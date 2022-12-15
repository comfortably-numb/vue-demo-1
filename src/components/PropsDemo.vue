<!--
 * @Author: shintarou.chou shintarou.chou@gmail.com
 * @Date: 2022-12-15 16:14:44
 * @LastEditors: shintarou.chou shintarou.chou@gmail.com
 * @LastEditTime: 2022-12-15 16:32:46
 * @FilePath: /vue-demo-1/src/components/PropsDemo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="blue">
    这里是PropsDemo内部
    {{ message }}
    <button @click="fn">call fn</button>
  </div>
</template>
<script>
export default {
  props: ["message", "fn"],
};
</script>

<style scoped>
.blue {
  color: blue;
}
</style>
