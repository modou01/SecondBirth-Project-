<template>
    <Layout>
      <div class="social-support">
        <SocialSupportContent @messageAdded="logMessage" />
      </div>
    </Layout>
  </template>
  
  <script>
  import Layout from '@/components/Layout.vue';
  import SocialSupportContent from '@/components/SocialSupportContent.vue';
  
  export default {
    name: 'SocialSupport',
    components: {
      Layout,
      SocialSupportContent,
    },
    methods: {
      logMessage(message) {
        console.log("Message de soutien ajouté :", message);
      },
    },
  };
  </script>
  