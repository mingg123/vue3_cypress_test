<template>
  <div class="hello">
    <!--    <ChartExample />-->
    <DemoComponent />
    <!--    <line-chart />-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LineChart from "@/components/lineChart";
import ChartExample from "@/components/ChartExample.vue";
import DemoComponent from "@/components/DemoComponent.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    DemoComponent,
    // LineChart,
    // ChartExample,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
