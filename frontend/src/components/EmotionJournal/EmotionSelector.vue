// src/components/EmotionJournal/EmotionSelector.vue
<template>
  <div class="emotion-selector">
    <h3>Comment vous sentez-vous aujourd'hui ?</h3>
    <div class="emotions">
      <button v-for="(emoji, index) in emojis" :key="index" @click="selectEmotion(emoji)" class="emoji-button">
        {{ emoji }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmotionSelector",
  data() {
    return {
      emojis: ["😊", "😂", "😢", "😡", "😌", "😍", "😭", "😳", "🤔", "😴", "😱", "😬", "😆", "😔", "😷", "😇", "🥳", "🥺", "😎", "🤗", "😖", "😅", "🤩", "🥵", "🥶", "🤯", "🤤", "😑", "🤬", "🤒", "🤕", "🤠", "😪", "😵", "🤑", "🤡", "😻", "🤖"]
    };
  },
  methods: {
    selectEmotion(emoji) {
      this.$emit("emotionSelected", emoji);
    }
  }
};
</script>

<style scoped>
.emotion-selector {
  background-color: #E8F8F5;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.emotion-selector h3 {
  color: #2BC3D6;
  font-size: 1.5em;
}

.emotions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}

.emoji-button {
  font-size: 1.8em;
  background-color: #FFB6C1;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.emoji-button:hover {
  transform: scale(1.2);
  background-color: #2BC3D6;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

