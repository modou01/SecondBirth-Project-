<template>
    <Layout>
      <div class="dashboard">
        <h2 class="dashboard-title">Tableau de Bord de Bien-être</h2>
        <p class="dashboard-subtitle">Visualisez et suivez votre évolution émotionnelle et de bien-être au fil du temps.</p>
  
        <!-- Section pour les graphiques -->
        <div class="dashboard-charts">
          <div class="chart-card">
            <h3>Évolution des Émotions</h3>
            <EmotionChart />
          </div>
          <div class="chart-card">
            <h3>Conseils d'Auto-Soin</h3>
            <SelfCareTips />
          </div>
        </div>
  
        <!-- Suggestions de conseils personnalisés -->
        <div class="dashboard-suggestions">
          <h3>Conseils du Jour</h3>
          <p>Hydratez-vous et prenez du temps pour vous aujourd’hui ! Vous le méritez !</p>
          <button class="btn-refresh">Nouveaux Conseils</button>
        </div>
      </div>
    </Layout>
  </template>
  
  <script>
  
  import EmotionChart from '@/components/Dashboard/EmotionChart.vue';
  import SelfCareTips from '@/components/Dashboard/SelfCareTips.vue';

  
  export default {
    name: 'Dashboard',
    components: {
      
      EmotionChart,
      SelfCareTips,
    },
    methods: {
      refreshTips() {
        console.log("Les conseils ont été mis à jour !");
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    padding: 40px 20px;
    background-color: #FFF0F5;
    color: #2BC3D6;
  }
  
  .dashboard-title {
    font-size: 2.5em;
    color: #2BC3D6;
    animation: fadeInDown 1s ease-in-out;
  }
  
  .dashboard-subtitle {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #4a90e2;
  }
  
  .dashboard-charts {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
  }
  
  .chart-card {
    background-color: #E8F8F5;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 20px;
    width: 45%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .chart-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
  
  .dashboard-suggestions {
    margin-top: 30px;
    background-color: #FFB6C1;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .btn-refresh {
    background-color: #2BC3D6;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }
  
  .btn-refresh:hover {
    background-color: #4a90e2;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  