<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <img src="@/assets/images/logo.webp" alt="Logo SECOND BIRTH" class="logo" />
        <nav class="navbar">
          <router-link to="/" class="nav-link">Accueil</router-link>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          <router-link to="/meditation" class="nav-link">Méditation</router-link>
          <router-link to="/emotion-journal" class="nav-link">Journal des Émotions</router-link>
          <router-link to="/self-care" class="nav-link">Soins Personnels</router-link>
          <router-link to="/social-support" class="nav-link">Soutien Social</router-link>
        </nav>
        <button class="theme-toggle" @click="toggleTheme">🌙</button>
      </div>
      <div class="header-curve"></div>
    </header>

    <!-- Slot pour le contenu de la page -->
    <main>
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/images/logo.webp" alt="Logo SECOND BIRTH" class="footer-logo-img" />
          <p>Supporting your postnatal mental health journey.</p>
        </div>
        <div class="footer-links">
          <h3>Liens rapides</h3>
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div class="footer-contact">
          <h3>Contactez-nous</h3>
          <p>Email: support@secondbirth.com</p>
          <p>Téléphone: +123 456 7890</p>
          <p>Adresse: 123 Main Street, Ville, Pays</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 SECOND BIRTH. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Layout",
  methods: {
    toggleTheme() {
      document.body.classList.toggle("dark-mode");
    }
  }
};
</script>

<style scoped>
/* Styles pour le header */
.header {
  background: linear-gradient(135deg, #2BC3D6, #FFB6C1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.header-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.navbar {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #FFFFFF;
  font-size: 1.1em;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 20px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.theme-toggle {
  background: transparent;
  border: none;
  font-size: 1.5em;
  color: #FFFFFF;
  cursor: pointer;
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  color: #FFD700;
}

.header-curve {
  width: 100%;
  height: 30px;
  background-color: #FFFFFF;
  border-top-left-radius: 100% 15px;
  border-top-right-radius: 100% 15px;
  position: absolute;
  bottom: -15px;
}

/* Styles pour le footer */
.footer {
  background-color: #2BC3D6;
  color: #FFFFFF;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 5px solid #FFB6C1;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
}

.footer-logo-img {
  width: 80px;
  transition: transform 0.3s ease;
}

.footer-logo-img:hover {
  transform: scale(1.1);
}

.footer-links a {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #FFB6C1;
}

.footer-bottom {
  margin-top: 20px;
  text-align: center;
  font-size: 0.9em;
}

/* Dark mode styles */
body.dark-mode {
  background-color: #1c1c1c;
  color: #FFFFFF;
}

body.dark-mode .header {
  background: linear-gradient(135deg, #333333, #1c1c1c);
}

body.dark-mode .footer {
  background-color: #333333;
}

body.dark-mode .nav-link {
  color: #FFFFFF;
}

body.dark-mode .nav-link:hover {
  background: rgba(255, 255, 255, 0.3);
}

body.dark-mode .footer-links a {
  color: #B0C4DE;
}

body.dark-mode .footer-links a:hover {
  color: #FFD700;
}
</style>
