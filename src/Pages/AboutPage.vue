<template>
  <!-- О приюте -->
  <section class="section about">
    <h1>О ПРИЮТЕ</h1>

    <div class="about-content">
      <p>
        Мы — команда волонтёров приюта «Дом и Забота».
        Приют для бездомных собак и кошек во Владивостоке. Сейчас у
        нас живут более 800 собак и 150 кошек. У каждого из них одна
        мечта — найти дом и любящего хозяина.
      </p>

      <img
        class="round-img"
        src="/assets/images/Woman.png"
        alt="Женщина с котом"
      />
    </div>
  </section>

  <!-- Взять питомца -->
  <section class="section adoption">
    <h2>Взять питомца</h2>

    <div class="adoption-content">
      <img
        class="pets-img"
        src="/assets/images/Animals.png"
        alt="Животные"
      />

      <div class="adoption-text">
        Хотите завести друга? Обратитесь к нам! Поможем вам подобрать
        животное по вашему образу жизни, опыту, жилищным условиям.
        Все питомцы привиты и стерилизованы.
      </div>
    </div>
  </section>

  <!-- Особенности -->
  <section class="section features">
    <h2>Особенности</h2>

    <div class="features-content">
      <div class="features-text">
        У нас есть как породистые, так и беспородные животные —
        щенки, молодые и взрослые собаки, кошки. Все они станут
        верными друзьями.
      </div>

      <img
        class="round-img"
        src="/assets/images/Cat.png"
        alt="Кот спит"
      />
    </div>
  </section>
</template>

<style scoped>
.section {
  margin: 0 auto;
  padding: 40px 160px;
  color: #5a4a42;
}
.section h1 {
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  color: #5a3f30;  
}

.section h2 {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color: #5a3f30;
}

/* О приюте */
.about-content {
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.about-content p {
  background: #fff9f5;
  border-radius: 300px;
  padding:50px;
  font-size: 30px;
  text-align: left;
  flex: 1;
}

.round-img {
  width: 380px;
}

/* Взять питомца */
.adoption-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

.pets-img {
  width: 380px;
}

.adoption-text {
  background: #fff9f5;
  border-radius: 300px;
  padding:50px;
  font-size: 30px;
  text-align: left;
}

/* Особенности */
.features-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.features-text {
  background: #fff9f5;
  border-radius: 300px;
  padding:50px;
  font-size: 30px;
  text-align: left;
}

</style>
