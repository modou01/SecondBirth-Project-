<template>
    <div class="social-support">
      <!-- Ajouter une div dédiée pour l'image de fond -->
      <div class="background-image"></div>
      <!-- Contenu de Soutien Social -->
      <div class="content">
        <h2 class="page-title">Soutien Social</h2>
        <p class="page-subtitle">Connectez-vous avec notre communauté et partagez votre expérience.</p>
  
        <div class="support-sticker">
          <img src="@/assets/images/support2.jpg" alt="Soutien" />
        </div>
  
        <div class="message-section">
          <textarea v-model="newMessage" placeholder="Partagez un message..." class="message-input"></textarea>
          <button @click="postMessage" class="post-button">Publier</button>
        </div>
  
        <div class="discussion-section">
          <div v-for="(message, index) in messages" :key="index" class="message-card">
            <p>{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .social-support {
    position: relative;
    padding: 60px 20px;
    border-radius: 12px;
    max-width: 900px;
    margin: auto;
    overflow: hidden;
    text-align: center;
  }
  
  .background-image {
    background-image: url('@/assets/images/support.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: blur(2px); /* Applique le flou */
}

  
  .social-support::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 2;
  }
  
  .page-title, .page-subtitle {
    color: #ffffff;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  }
  
  .support-sticker img {
    width: 100px;
    animation: bounce 2s infinite;
    margin-bottom: 20px;
    border-radius: 50%;
  }
  
  .message-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .message-input {
    width: 80%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1em;
    margin-bottom: 10px;
    resize: none;
  }
  
  .post-button {
    background-color: #2BC3D6;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .post-button:hover {
    background-color: #4a90e2;
  }
  
  .discussion-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .message-card {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 15px 20px;
    max-width: 80%;
    width: 100%;
    text-align: left;
    color: #333;
  }
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  </style>
  