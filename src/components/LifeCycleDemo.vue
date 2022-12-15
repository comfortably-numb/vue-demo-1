<!--
 * @Author: shintarou.chou shintarou.chou@gmail.com
 * @Date: 2022-12-15 15:56:00
 * @LastEditors: shintarou.chou shintarou.chou@gmail.com
 * @LastEditTime: 2022-12-15 15:59:14
 * @FilePath: /vue-demo-1/src/components/Demo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="red">
    {{ n }}
    <button @click="add">+1</button>
    <hr />
    <abc></abc>
    {{ array.filter((i) => i % 2 === 0) }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated:" + this.n);
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    add() {
      this.n += 1;
    },
  },
};
</script>
<style scoped></style>
