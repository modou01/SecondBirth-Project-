<template>
    <Layout>
      <div class="dashboard">
        <DashboardContent @assessmentCompleted="logAssessment" />
      </div>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/components/Layout.vue';
  import DashboardContent from '@/components/DashboardContent.vue';
  
  export default {
    name: 'Dashboard',
    components: {
      Layout,
      DashboardContent,
    },
    methods: {
      logAssessment(assessment) {
        console.log("Évaluation complétée :", assessment);
      },
    },
  };
  </script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
  