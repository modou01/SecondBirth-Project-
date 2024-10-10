// src/components/SelfCare/SelfCareTip.vue
<template>
  <div class="self-care-tip">
    <p>{{ tip }}</p>
  </div>
</template>

<script>
export default {
  name: "SelfCareTip",
  props: ['tip']
};
</script>

<style scoped>
.self-care-tip {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 20px;
  max-width: 300px;
  text-align: center;
  color: #4a90e2;
  font-size: 1.2em;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s;
  animation: fadeInUp 1s ease-in-out;
}

.self-care-tip:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  background-color: #FFB6C1;
  color: #FFFFFF;
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
