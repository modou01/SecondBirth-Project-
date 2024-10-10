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
        <div class="header-text">
        <h1 class="header-title">Bienvenue sur <span>SECOND BIRTH</span></h1>
        <p class="header-subtitle">Votre accompagnement personnalisé pour le bien-être mental postnatal.</p>
      </div>
      </header>
  
      <!-- Présentation avec animation -->
    <section class="presentation">
      <h2>Découvrez notre application</h2>
      <p>SECOND BIRTH vous accompagne à chaque étape de votre postnatal avec des outils de suivi et des conseils personnalisés.</p>
    </section>
  
      <div class="slider">
        <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" class="slider-image" />
      </div>
  
      <section class="cards-section">
        <div class="cards">
          <router-link to="/emotion-journal" class="card">
            <img src="@/assets/images/emotion-journal.jpg" alt="Journal des Émotions" class="card-image"/>
            <h2>Journal des Émotions</h2>
            <p>Suivez vos émotions quotidiennes pour comprendre les tendances de votre humeur.</p>
          </router-link>
          <router-link to="/dashboard" class="card">
            <img src="@/assets/images/weekly-assessment.jpg" alt="Tableau de Bord" class="card-image"/>
            <h2>Tableau de Bord</h2>
            <p>Évaluez votre bien-être mental chaque semaine pour identifier les domaines à soutenir.</p>
          </router-link>
          <router-link to="/self-care" class="card">
            <img src="@/assets/images/self-care-tips.jpg" alt="Soins Personnels" class="card-image"/>
            <h2>Soins Personnels</h2>
            <p>Accédez à des conseils personnalisés pour maintenir un mode de vie équilibré.</p>
          </router-link>
          <router-link to="/social-support" class="card">
            <img src="@/assets/images/social-support.jpg" alt="Soutien Social" class="card-image"/>
            <h2>Soutien Social</h2>
            <p>Connectez-vous avec des groupes de soutien et construisez un réseau d'aide émotionnelle.</p>
          </router-link>
          <router-link to="/meditation" class="card">
            <img src="@/assets/images/symptoms-tracker.jpg" alt="Méditation" class="card-image"/>
            <h2>Méditation</h2>
            <p>Pratiquez la méditation pour réduire le stress et favoriser la relaxation.</p>
          </router-link>
        </div>
      </section>
  
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
  import slide1 from "@/assets/images/slide1.jpg";
  import slide2 from "@/assets/images/slide2.jpg";
  import slide3 from "@/assets/images/slide3.jpg";
  import slide4 from "@/assets/images/slide4.jpg";
  
  export default {
    name: "App",
    data() {
      return {
        images: [
          { src: slide1, alt: "Slide 1" },
          { src: slide2, alt: "Slide 2" },
          { src: slide3, alt: "Slide 3" },
          { src: slide4, alt: "Slide 4" }
        ],
        currentIndex: 0
      };
    },
    mounted() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    }
  };
  </script>
  
  <style scoped>
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

.header-text {
  text-align: center;
  margin-top: -15px; /* Pour remonter légèrement le texte */
  animation: fadeInDown 1.5s ease-in-out;
}

.header-title {
  color: #FFFFFF;
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  animation: bounceIn 1.8s ease;
}

.header-title span {
  color: #FFD700;
}

.header-subtitle {
  color: #FFFFFF;
  font-size: 1.3em;
  margin-top: 5px;
  animation: fadeIn 2s ease-in-out;
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

.header-curve {
  width: 100%;
  height: 30px;
  background-color: #FFFFFF;
  border-top-left-radius: 100% 15px;
  border-top-right-radius: 100% 15px;
  position: absolute;
  bottom: -15px;
}
  
  .presentation {
    text-align: center;
    padding: 20px;
    background-color: #E8F8F5;
    color: #2BC3D6;
    margin: 0; 
  }
  
  .slider {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    background-color: #E8F8F5;
    color: #2BC3D6;
    margin: 0; 
  }
  
  .slider-image {
    width: 80%;
    max-width: 1200px; /* Limite la largeur */
    height: 400px; /* Hauteur fixe pour format rectangulaire */
    object-fit: cover;
    border-radius: 12px;
    display: block;
    margin: 0 auto; /* Centrage horizontal */
  }
  
  
  .slider-image {
    width: 80%;
    border-radius: 12px;
  }
  
  .cards-section {
    padding: 40px 20px;
    background-color: #FFF0F5;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    background-color: #FFB6C1;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    color: #2BC3D6;
    width: 280px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
  }
  
  .card h2 {
    font-size: 1.5em;
    margin: 10px 0;
  }
  
  .card p {
    font-size: 0.9em;
    color: #333;
  }
  
  .card-description {
    font-size: 0.8em;
    color: #555;
    margin-top: 10px;
  }
  
  .card:hover {
    background-color: #F3BFC2;
    color: white;
    transform: translateY(-5px);
  }
  
  .footer {
  background-color: #2BC3D6;
  color: #FFFFFF;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 5px solid #FFB6C1;
}

.footer-logo-img {
    width: 80px;
  }

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
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

body.dark-mode .footer-links a {
  color: #B0C4DE;
}

body.dark-mode .footer-links a:hover {
  color: #FFD700;
}
  </style>
  