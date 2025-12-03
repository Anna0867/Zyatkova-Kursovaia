<template>
    <!-- ПИТОМЦЫ -->
    <section class="pets">
      <h2 class="pets-title">Питомцы, ищущие дом</h2>
      <div class="pets-bg">
        <div class="pets-grid">
          <div
            v-for="(pet, i) in pets"
            :key="i"
            class="pet-card"
          >
            <div class="pet-img">
              <img :src="pet.image" alt="">
            </div>
            <div class="pet-info">
              <h3>{{ pet.name }}</h3>
              <p>{{ pet.age }}</p>
              <p>{{ pet.breed }}</p>
              <router-link :to="`/pet/${pet.id}`">
                <button class="btn-more">Узнать больше...</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'PetCard',
  data() {
    return {
      pets: [
        { id: 1 , name: 'Дружок', age: '2 года', breed: 'Джек-рассел', image: '/assets/images/Jack.png' },
        { id: 2 , name: 'Кира', age: '3 года', breed: 'Ориент', image: '/assets/images/Orient.png' },
        { id: 3 , name: 'Муля', age: '1 год', breed: 'Шотландская', image: '/assets/images/Scotland.png' },
        { id: 4 , name: 'Джек', age: '3 месяца', breed: 'Мальтипу', image: '/assets/images/Maltipu.png' },
      ],
    }
  },
};
</script>

<style scoped>
/* ============== ПИТОМЦЫ ============== */
.pets {
  margin-bottom: 60px;
}

.pets-title {
  font-size: 48px;
  text-align: center;
  margin: 0 0 40px 0;
  color: #3D2C25;
}

.pets-bg {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  background: #EFEAE6; 
  padding: 40px;
  border-radius: 16px;
}

.pets-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.pet-card {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  width: 300px;
  background: #FFFFFF;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pet-card:hover {
  transform: translateY(-10px);
}

.pet-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.pet-info {
  padding: 16px;
  text-align: center;
  font-size: 20px;
}

.pet-info h3 {
  margin: 0 0 10px 0;
  font-size: 30px;
}

.btn-more {
  margin-top: 10px;
  cursor: pointer;
  font-size: 17px;
  padding: 10px 16px;
  border-radius: 15px;
  background-color: #FFFFFF;
  border: #4d4d4d 1px solid;
}
</style>