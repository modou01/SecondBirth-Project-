// src/components/SelfCareTips.vue
<template>
  <div class="self-care-tips">
    <h3>Conseils d'Auto-Soin</h3>
    <ul>
      <li v-for="(tip, index) in tips" :key="index">
        {{ tip }}
      </li>
    </ul>
    <button @click="refreshTips" class="btn-refresh">Nouveaux Conseils</button>
  </div>
</template>

<script>
export default {
  name: "SelfCareTips",
  data() {
    return {
      tips: [
        "Prenez une pause pour respirer profondément",
        "Hydratez-vous régulièrement",
        "Faites une courte promenade",
        "Pratiquez la gratitude",
        "Prenez quelques minutes pour vous relaxer"
      ],
    };
  },
  methods: {
    refreshTips() {
      this.tips = this.shuffle(this.tips);
    },
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
.self-care-tips {
  background-color: #E8F8F5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #2BC3D6;
}

.self-care-tips h3 {
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #FFB6C1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

li:hover {
  transform: scale(1.05);
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
</style>
