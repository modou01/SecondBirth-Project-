// src/components/EmotionJournal/EmotionJournalContent.vue
<template>
  <div class="emotion-journal">
    <h2 class="page-title">Journal des Émotions</h2>
    <p class="page-subtitle">Exprimez vos émotions quotidiennes et suivez leur évolution.</p>
    
    <EmotionSelector />

    <div class="text-journal">
      <h3>Comment s'est passée votre journée ?</h3>
      <textarea v-model="journalEntry" placeholder="Racontez votre journée..." class="journal-input"></textarea>
      <button @click="saveEntry" class="btn-save">Enregistrer</button>
    </div>

    <div class="emotion-trend">
      <h3>Évolution des Émotions</h3>
      <EmotionChart :data="emotionData" />
    </div>

    <div v-if="suggestion" class="suggestion-box">
      <p>{{ suggestion }}</p>
    </div>
  </div>
</template>

<script>
import EmotionSelector from '@/components/EmotionJournal/EmotionSelector.vue';
import EmotionChart from '@/components/EmotionJournal/EmotionChart.vue';
export default {
  name: "EmotionJournalContent",
  components: {
    EmotionSelector,
    EmotionChart,
  },
  data() {
    return {
      journalEntry: '',
      emotionData: [3, 4, 2, 5, 3, 6, 4],
      suggestion: null,
    };
  },
  methods: {
    saveEntry() {
      console.log("Journal Entry Saved:", this.journalEntry);
      this.journalEntry = '';
    },
    showSuggestion(emotion) {
      if (emotion === '😢') {
        this.suggestion = "Prenez le temps de vous détendre et de faire quelque chose que vous aimez.";
      } else if (emotion === '😊') {
        this.suggestion = "Continuez à sourire et répandez votre bonheur autour de vous !";
      } else {
        this.suggestion = "Souvenez-vous que chaque émotion est temporaire.";
      }
    }
  }
};
</script>

<style scoped>
.emotion-journal {
  text-align: center;
  background-image: linear-gradient(to bottom, #E8F8F5, #FFF0F5);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: auto;
}

.page-title {
  color: #2BC3D6;
  font-size: 3em;
  margin-bottom: 10px;
  animation: fadeInDown 1s ease-in-out;
  text-transform: uppercase;
}

.page-subtitle {
  font-size: 1.5em;
  color: #4a90e2;
  margin-bottom: 30px;
}

.text-journal {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.journal-input {
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  margin-top: 10px;
  margin-bottom: 10px;
}

.btn-save {
  background-color: #2BC3D6;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-save:hover {
  background-color: #4a90e2;
}

.suggestion-box {
  margin-top: 20px;
  background-color: #FFB6C1;
  padding: 15px;
  border-radius: 8px;
  font-size: 1.2em;
  color: #2BC3D6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
}

.emotion-trend {
  margin-top: 40px;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>

