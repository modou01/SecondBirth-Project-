<template>
  <div class="breathing-exercise">
    <h3>Exercice de Respiration</h3>
    <p>Respirez profondément et relâchez lentement pour vous détendre.</p>
    <button class="btn-next">Exercice Suivant</button>
  </div>
</template>

<style scoped>
.exercise-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 15px;
}

.breathing-exercise {
  background-color: #E8F8F5;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-next {
  background-color: #2BC3D6;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-next:hover {
  background-color: #4a90e2;
}
</style>
