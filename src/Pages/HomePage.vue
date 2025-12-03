<template>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-left">
        <h1>ПРИЮТ<br>ДЛЯ<br>ЖИВОТНЫХ</h1>
        <p>Мы предоставляем любящий дом для бездомных питомцев</p>
      </div>
      <div class="hero-right">
        <img src="/assets/images/MainImg.png" alt="hero">
      </div>
    </section>

    <!-- МИССИЯ -->
    <section class="mission">
      <div class="mission-inner">
        <img src="/assets/images/Mission.png" class="mission-img" alt="mission image">
        <div class="mission-text">
          <h2>Наша миссия</h2>
          <p>Мы стремимся спасать, реабилитировать и пристраивать в новые семьи брошенных животных.
             Наша цель — обеспечить безопасную и любящую среду, в которой эти животные могут жить
             полноценной жизнью.</p>
        </div>
      </div>
    </section>

    <PetCard/>

    <!-- CTA VOLUNTEER -->
    <section class="volunteer" id="volunteer">
      <div class="volunteer-inner">
        <div class="volunteer-text">
          <h2>Волонтерство</h2>
          <p>Узнайте, как вы можете помочь.
            Нам нужна помощь пожертвованиями, передержкой и волонтёрством.</p>
          <button class="btn-contact" @click="showModal = true">Связаться с нами</button>
        </div>
      </div>
    </section>

    <HelpCard/>
    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-backdrop" @click.self="showModal = false">
      <div class="modal-window">
        <h2>Свяжитесь с нами</h2>
        <p>Оставьте свои контакты, и мы вам напишем!</p>

        <input type="text" placeholder="Ваше имя">
        <input type="email" placeholder="Email">

        <button class="modal-btn">Отправить</button>
        <button class="modal-close" @click="showModal = false">Закрыть</button>
      </div>
    </div>
</template>

<script>
import PetCard from '../components/MainCards.vue'
import HelpCard from '../components/HelpCard.vue';

export default {
  components: { PetCard, HelpCard },

  data() {
    return {
      showModal: false,
    };
  },
};
</script>


<style scoped>

section {
  padding: 0 160px;
}

/* ================= HERO =============== */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 408px ;
  background: #fff5eb;
  padding: 0 160px; 
  margin-bottom: 60px;
}
.hero-left h1 {
  font-size: 96px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
}
.hero-left p {
  margin-top: 24px;
  font-size: 24px;
}
.hero-right img {
  width: 520px;
}

/* ============== МИССИЯ ============== */
.mission{
  
  margin-bottom: 60px;
}

.mission-inner {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  background: #D6CFC6;
  border-radius: 16px;
  overflow: hidden; 
  height: 360px; 
  padding: 0; 
}

.mission-img {
  flex: 0 0 20%; 
  position: relative;
}

.mission-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

.mission-text {
  flex: 1;
  padding: 40px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
}

.mission-text h2 {
  font-size: 48px;
  margin: 0 0 20px 0;
}

/* ===== VOLUNTEER CTA ===== */
.volunteer {
  height: 100%;
  background: url('/assets/images/Volont.png') center/cover no-repeat;
  min-height: 595px;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
.volunteer-inner {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  background: rgba(255,255,255,0.85);
  padding: 40px;
  border-radius: 16px;
  width: 900px;
  min-height: 300px;
  text-align: center;

}
.volunteer-text h2 {
  font-size: 80px;
}

.volunteer-text p {
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.btn-contact {
  cursor: pointer;
  padding: 10px 80px ;
  font-size: 40px;
  background-color: #D7D0C3;
  color: #000000;
  border-radius: 15px;
  border: none;
  transition: 0.2s;
}

.btn-contact:hover {
  background-color: #bbb5a8;
}

/* ======== MODAL =========== */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-window {
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  width: 450px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-window input {
  padding: 12px 16px;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.modal-btn {
  padding: 12px;
  font-size: 20px;
  background: #D7D0C3;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.modal-btn:hover {
  background-color: #bbb5a8;
}

.modal-close {
  padding: 10px;
  font-size: 16px;
  background: #eee;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
