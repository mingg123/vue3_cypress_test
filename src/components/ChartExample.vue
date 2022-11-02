<template>
  <!--  <div style="height: 300px; transform: rotate(90deg)">-->
  <div style="width: 300px">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { defineComponent } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "ChartExample",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {},
    },
    plugins: {
      // type: Array as PropType<Plugin<'bar'>[]>,
      type: Array,
      default: () => [],
    },
  },
  setup() {
    // const Utils = ChartUtils.init();
    // const NUM_POINTS = 100000;
    // // Utils.srand(10);
    //
    // // const start = Utils.parseISODate("2021-04-01T00:00:00Z").toMillis();
    // const pointData = [];
    //
    // for (let i = 0; i < NUM_POINTS; ++i) {
    //   // Most data will be in the range [0, 20) but some rare data will be in the range [0, 100)
    //   const max = Math.random() < 0.001 ? 100 : 20;
    //   pointData.push({ x: start + i * 30000, y: 1 });
    // }

    // const data = {
    //   datasets: [
    //     {
    //       borderWidth: 1,
    //       data: pointData,
    //       label: "Large Dataset",
    //       radius: 0,
    //     },
    //   ],
    // };

    const chartData = {
      labels: ["상점", "배너", "업적", "출석"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          // data: pointData,
          data: ["2021", "2021", "2021", "2021"],
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        y: {
          type: "time",
          time: {
            unit: "year",
          },
          ticks: {
            crossAlign: "far",
            autoSkip: true,
          },
        },
      },
    };
    return { chartData, chartOptions };
  },
});
</script>
