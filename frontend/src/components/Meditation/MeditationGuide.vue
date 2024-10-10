<template>
  <div class="meditation-guide">
    <h3>Méditation Guidée</h3>
    <p>Suivez la voix pour atteindre un état de relaxation profonde.</p>
    <button @click="playAudio" class="btn-play">Écouter</button>
  </div>
</template>

<script>
export default {
  name: "MeditationGuide",
  methods: {
    playAudio() {
      console.log("Lecture de l'audio de méditation");
    },
  },
};
</script>

<style scoped>
.meditation-guide {
  background-color: #FFB6C1;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-play {
  background-color: #2BC3D6;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-play:hover {
  background-color: #4a90e2;
}
</style>
