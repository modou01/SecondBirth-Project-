<!-- components/auth/Register.vue -->
<template>
    <div class="auth-container">
      <div class="form-box">
        <h2 class="form-title">Inscription</h2>
        <form @submit.prevent="register">
          <div class="input-group">
            <label>Nom</label>
            <input type="text" v-model="name" required />
          </div>
          <div class="input-group">
            <label>Email</label>
            <input type="email" v-model="email" required />
          </div>
          <div class="input-group">
            <label>Mot de passe</label>
            <input type="password" v-model="password" required />
          </div>
          <button type="submit" class="auth-button">S'inscrire</button>
        </form>
        <p class="toggle-form">
          Déjà inscrit ? <router-link to="/login">Connectez-vous</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Register",
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Logique d'inscription
        console.log("Nom:", this.name);
        console.log("Email:", this.email);
        console.log("Mot de passe:", this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles identiques à ceux de Login.vue */
  </style>
  