<template>
  <Layout>
    <div class="meditation">
      <MeditationContent @symptomLogged="logSymptom" />
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import MeditationContent from '@/components/MeditationContent.vue';

export default {
  name: 'Meditation',
  components: {
    Layout,
    MeditationContent,
  },
  methods: {
    logSymptom(symptom) {
      console.log("Symptôme enregistré :", symptom);
    },
  },
};
</script>
