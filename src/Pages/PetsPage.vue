<template>
  <section class="pets-section">

    <h1 class="main-title">Мы создаем семьи: найдите своего питомца</h1>

    <div class="pets-block">

      <!-- Собаки -->
      <h2 class="category-title">Собаки</h2>

      <div class="pets-grid">
        <div v-for="dog in dogs" :key="dog.id" class="pet-card" :style="{ backgroundColor: dog.bg }">

          <img :src="dog.img" class="pet-img" />

          <div class="pet-info">
            <h3>{{ dog.name }}</h3>
            <p>{{ dog.age }}</p>
            <p>{{ dog.breed }}</p>

            <button class="more-btn">Узнать больше...</button>
          </div>

        </div>
      </div>

      <!-- Кошки -->
      <h2 class="category-title">Кошки</h2>

      <div class="pets-grid">
        <div v-for="cat in cats" :key="cat.id" class="pet-card" :style="{ backgroundColor: cat.bg }">

          <img :src="cat.img" class="pet-img" />

          <div class="pet-info">
            <h3>{{ cat.name }}</h3>
            <p>{{ cat.age }}</p>
            <p>{{ cat.breed }}</p>

            <button class="more-btn">Узнать больше...</button>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "PetsPage",

  data() {
    return {
      dogs: [
        {
          id: 1,
          img: "/assets/images/Lavretka.png",
          name: "Арчи",
          age: "1.5 года",
          breed: "Лавретка",
          bg: "#D9D9D9"
        },
        {
          id: 2,
          img: "/assets/images/Pitbul.png",
          name: "Зевс",
          age: "3 года",
          breed: "Питбуль",
          bg: "#FFC7D7"
        },
        {
          id: 3,
          img: "/assets/images/Pudel.png",
          name: "Макс",
          age: "2 месяца",
          breed: "Пудель",
          bg: "#B9E6FF"
        },
        {
          id: 4,
          img: "/assets/images/Senbernar.png",
          name: "Луна",
          age: "1 месяц",
          breed: "Сенбернар",
          bg: "#D6C8FF"
        }
      ],

      cats: [
        {
          id: 1,
          img: "/assets/images/BlueCat.png",
          name: "Белла",
          age: "2 года",
          breed: "Русская голубая",
          bg: "#B5E8D5"
        },
        {
          id: 2,
          img: "/assets/images/Sfinks.png",
          name: "Умка",
          age: "1 год",
          breed: "Сфинкс",
          bg: "#FFE2E2"
        },
        {
          id: 3,
          img: "/assets/images/Persid.png",
          name: "Пушок",
          age: "4 года",
          breed: "Персидская",
          bg: "#F0FF7E"
        },
        {
          id: 4,
          img: "/assets/images/Devon.png",
          name: "Дина",
          age: "3 месяца",
          breed: "Девон-рекс",
          bg: "#BFBFBF"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Общий фон секции */
.pets-section {
  padding: 30px 0 70px;
}

/* Заголовок страницы */
.main-title {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  text-align: center;
  background: #EFEAE6;
  padding: 18px 35px;
  border-radius: 12px;
  font-size: 32px;
  font-weight: 600;
  color: #3D2C25;
  width: max-content;
  margin: 0 auto 35px;
}

/* Белый блок */
.pets-block {
  background: #EFEAE6;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  width: 90%;
  margin: 0 auto;
}



/* Заголовок категорий */
.category-title {
  font-size: 40px;
  margin: 15px 0;
  color: #3D2C25;
  margin-bottom: 15px;
}

/* Сетка карточек */
.pets-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 35px;
  margin-bottom: 40px;
}

/* Карточка питомца */
.pet-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.pet-card:hover {
  transform: translateY(-10px);
}

/* Картинка */
.pet-img {
  width: 100%;
  object-fit: contain;
  margin-top: 10px;
}

/* Текст */
.pet-info {
  background: #FFF;
  padding: 18px;
  text-align: center;
  font-size: 18px;
}

.pet-info h3 {
  margin: 0 0 6px 0;
  font-size: 22px;
  color: #3D2C25;
}

/* Кнопка */
.more-btn {
  margin-top: 10px;
  background: #FFFFFF;
  border: 1px solid #4d4d4d;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
}
</style>
