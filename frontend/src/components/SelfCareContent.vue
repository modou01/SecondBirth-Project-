<template>
  <div class="self-care">
    <h2 class="page-title">Soins Personnels</h2>
    <p class="page-subtitle">Prenez soin de vous avec des conseils adaptés à votre bien-être.</p>
    
    <div class="tips-section">
      <SelfCareTip v-for="(tip, index) in tips" :key="index" :tip="tip" />
    </div>
  </div>
</template>

<script>
import SelfCareTip from '@/components/SelfCare/SelfCareTip.vue';

export default {
  name: "SelfCareContent",
  components: {
    SelfCareTip,
  },
  data() {
    return {
      tips: [
        "Prenez quelques minutes pour respirer profondément.",
        "Hydratez-vous régulièrement.",
        "Prenez le temps de faire une activité que vous aimez.",
        "Méditez pendant quelques minutes pour apaiser l'esprit.",
        "Bougez votre corps, même si ce n'est qu'une petite marche."
      ]
    };
  }
};
</script>

<style scoped>
.self-care {
  text-align: center;
  background-image: url('@/assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  border-radius: 12px;
  max-width: 900px;
  margin: auto;
  position: relative;
  overflow: hidden;
}

.self-care::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Couche plus sombre */
  backdrop-filter: blur(1px); /* Réduit l'intensité du flou */
  z-index: 1;
  border-radius: 12px;
}

.page-title, .page-subtitle, .tips-section {
  position: relative;
  z-index: 2;
}

.page-title {
  color: #ffffff;
  font-size: 3em;
  margin-bottom: 10px;
  animation: fadeInDown 1.2s ease-in-out;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7); /* Améliore la lisibilité */
}

.page-subtitle {
  font-size: 1.5em;
  color: #ffffff;
  margin-bottom: 30px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1.5s ease-in-out;
}

.tips-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
