<template>
  <div class="meditation-content">
    <h2 class="page-title">Exercices de Méditation</h2>
    <p class="page-subtitle">Détendez-vous avec des exercices de respiration et des méditations guidées.</p>
    
    <div class="exercise-section">
      <div class="exercise-container">
        <img src="@/assets/images/breathing.jpg" alt="Exercice de Respiration" class="exercise-image"/>
        <BreathingExercise />
      </div>
      <div class="exercise-container">
        <img src="@/assets/images/meditation.jpg" alt="Méditation Guidée" class="exercise-image"/>
        <MeditationGuide />
      </div>
    </div>
  </div>
</template>

<script>
import BreathingExercise from '@/components/Meditation/BreathingExercise.vue';
import MeditationGuide from '@/components/Meditation/MeditationGuide.vue';

export default {
  name: 'MeditationContent',
  components: {
    BreathingExercise,
    MeditationGuide,
  },
};
</script>

<style scoped>
.meditation-content {
  text-align: center;
  background-image: linear-gradient(to bottom, #E8F8F5, #FFF0F5);
  padding: 40px;
  border-radius: 12px;
}

.page-title {
  color: #2BC3D6;
  font-size: 2.5em;
  margin-bottom: 10px;
  animation: fadeInDown 1s ease-in-out;
}

.page-subtitle {
  font-size: 1.2em;
  color: #4a90e2;
  margin-bottom: 30px;
}

.exercise-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.exercise-container {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 20px;
  width: 45%;
  animation: fadeInUp 1s ease-in-out;
}

.exercise-container:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.exercise-image {
  width: 80%; /* Ajustement de la taille des images */
  max-width: 400px; /* Largeur maximale pour limiter la taille */
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

