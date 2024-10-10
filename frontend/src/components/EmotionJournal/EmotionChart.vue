// src/components/EmotionJournal/EmotionChart.vue
<template>
  <div class="emotion-chart">
    <canvas id="emotionChart"></canvas>
  </div>
</template>

<script>
import { Chart } from 'chart.js';

export default {
  name: "EmotionChart",
  props: ['data'],
  mounted() {
    new Chart(document.getElementById('emotionChart'), {
      type: 'line',
      data: {
        labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        datasets: [{
          label: 'Émotions',
          data: this.data,
          borderColor: '#2BC3D6',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true
        }]
      }
    });
  }
};
</script>

<style scoped>
.emotion-chart {
  width: 100%;
  max-width: 600px;
  margin: auto;
  background-color: #FFF;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

canvas {
  width: 100% !important;
  height: auto !important;
  max-height: 400px;
}

</style>

