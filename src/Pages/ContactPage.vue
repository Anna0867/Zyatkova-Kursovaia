<template>
  <section class="contacts-page">

    <h1 class="title">Связаться с нами</h1>

    <div class="content">

      <!-- Левая часть — форма -->
      <div class="form-block">
        
        <label class="label">Введите свой номер телефона</label>
        <input type="text" placeholder="Номер" class="input"/>

        <label class="label label-email">
          Вы также можете сообщить нам свой адрес электронной почты, что бы получать новости
        </label>
        <input type="email" placeholder="E-mail" class="input" />

        <button class="submit-btn">ОТПРАВИТЬ</button>

        <!-- Маленький круг с собакой -->
        <div class="circle circle-small">
          <img src="/assets/images/DogSmall.png" class="circle-img" />
        </div>

        <!-- Маленький круг с котёнком -->
        <div class="circle circle-small-2">
          <img src="/assets/images/CatSmall.png" class="circle-img" />
        </div>

      </div>

      <!-- Правая часть — большой круг -->
      <div class="circle circle-big">
        <img src="/assets/images/DogCatBig.png" class="circle-img-big" />
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "ContactsPage",
};
</script>

<style scoped>
.contacts-page {

  padding: 40px 0 70px;
}

/* Заголовок */
.title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #3D2C25;
  margin-bottom: 35px;
}

/* Контент */
.content {
  width: 90%;
  margin: 0 auto;
  position: relative;
  display: flex;
  gap: 40px; 
}

/* Левая форма */
.form-block {
  width: 600px; 
  position: relative;
}

.label {
  font-size: 25px;
  color: #3d3d3d;
  margin-bottom: 6px;
  display: block;
}

.label-email {
  margin-top: 20px;
}

.input {
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #F5AAAA;
  font-size: 25px;
  margin-bottom: 10px;
  outline: none;
  background: #fff;
}

.submit-btn {
  margin-top: 18px;
  background: #F5AAAA;
  border: none;
  padding: 14px 45px;
  border-radius: 35px;
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #E98C8C;
}

/* Круги */
.circle {
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Большой розовый круг */
.circle-big {
  width: 800px;
  height: 800px;
  background: #EEC7C9;
  right: 50px;
  top: 0;
  position: absolute;
}

.circle-img-big {
  width: 800px;
  height: auto;
}

/* Маленький круг слева (собака) */
.circle-small {
  width: 350px;
  height: 350px;
  background: #E6D8C9;
  bottom: -400px;
  left: 120px; 
  position: absolute;
}

.circle-small-2 {
  width: 270px;
  height: 270px;
  background: #ffffff;
  bottom: -500px;
  left: 600px; 
  position: absolute;
}

.circle-img {
  width: 85%;
  height: auto;
}
</style>
