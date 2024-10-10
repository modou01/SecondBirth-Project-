<!-- src/components/auth/Login.vue -->
<template>
  <div class="auth-container">
    <div class="form-box">
      <h2 class="form-title">Connexion</h2>
      <form @submit.prevent="login">
        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="input-group">
          <label>Mot de passe</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit" class="auth-button">Se connecter</button>
      </form>
      <p class="toggle-form">
        Pas encore inscrit ? <router-link to="/register">Inscrivez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const validEmail = "francoise@gmail.fr";
      const validPassword = "password";

      if (this.email === validEmail && this.password === validPassword) {
        console.log("Connexion réussie !");
        localStorage.setItem('authenticated', 'true');
        this.$router.push('/');
      } else {
        alert("Identifiants incorrects");
      }
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #2BC3D6, #FFB6C1);
}
.form-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}
.form-title {
  font-size: 2em;
  color: #2BC3D6;
  margin-bottom: 20px;
}
.input-group {
  margin-bottom: 20px;
}
.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}
.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.auth-button {
  background: #2BC3D6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.auth-button:hover {
  background: #FFB6C1;
}
.toggle-form {
  margin-top: 20px;
  color: #555;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
