<template>
  <div class="emotion-chart">
    <canvas ref="emotionChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  name: "EmotionChart",
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.emotionChart.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
          datasets: [{
            label: 'Niveau de Joie',
            data: [3, 5, 2, 8, 7, 6, 4],
            borderColor: '#FFB6C1',
            backgroundColor: 'rgba(255, 182, 193, 0.3)',
            fill: true,
            tension: 0.4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
    }
  }
};
</script>

<style scoped>
.emotion-chart {
  position: relative;
  height: 300px;
  width: 100%;
}
</style>
