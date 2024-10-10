<template>
    <Layout>
      <div class="self-care">
        <SelfCareContent @tipAdded="logTip" />
      </div>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/components/Layout.vue';
  import SelfCareContent from '@/components/SelfCareContent.vue';
  
  export default {
    name: 'SelfCare',
    components: {
      Layout,
      SelfCareContent,
    },
    methods: {
      logTip(tip) {
        console.log("Conseil ajouté :", tip);
      },
    },
  };
  </script>
  