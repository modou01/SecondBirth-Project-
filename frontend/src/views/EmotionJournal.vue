<template>
    <Layout>
      <div class="emotion-journal">
        <EmotionJournalContent @emotionSelected="logEmotion" />
      </div>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/components/Layout.vue';
  import EmotionJournalContent from '@/components/EmotionJournalContent.vue';
  
  export default {
    name: 'EmotionJournal',
    components: {
      Layout,
      EmotionJournalContent,
    },
    methods: {
      logEmotion(emotion) {
        console.log("Émotion sélectionnée :", emotion);
      },
    },
  };
  </script>
  