<template>
  <div class="help-wrapper">
    <h1 class="title">Помоги друзьям, которые ищут дом!</h1>
    <p class="subtitle">Чем можно помочь нашему приюту:</p>

    <div class="cards">
      <div
        class="card"
        v-for="item in items"
        :key="item.id"
      >
        <img :src="item.img" class="card-img" />

        <div class="card-text">
            <div class="card-title">{{ item.title }}</div>
            <div class="card-price">{{ item.price }} руб</div>
          <div class="card-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>

    <button class="help-btn">Помочь приюту</button>
  </div>
</template>

<script>
export default {
  name: "HelpCard",

  data() {
    return {
      items: [
        {
          id: 1,
          img: "/assets/images/Fancy.png",
          title: "Fancy Feast",
          price: 40,
          desc: "Еда для кошек"
        },
        {
          id: 2,
          img: "/assets/images/Kibble.png",
          title: "Kibbles",
          price: 199,
          desc: "Еда для собак"
        },
        {
          id: 3,
          img: "/assets/images/Nulo.png",
          title: "nulo",
          price: 255,
          desc: "Еда для кошек"
        },
        {
          id: 4,
          img: "/assets/images/DogsOsh.png",
          title: "Ошейник",
          price: 200,
          desc: "Ошейник для собак"
        },
        {
          id: 5,
          img: "/assets/images/CatsOsh.png",
          title: "Ошейник",
          price: 405,
          desc: "Ошейник для кошек"
        },
        {
          id: 6,
          img: "/assets/images/Balls.png",
          title: "Игрушки",
          price: 10,
          desc: "Мячи"
        }
      ]
    };
  }
};
</script>

<style scoped>
.help-wrapper {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  max-width: 1600px;
  margin: 0 auto;
  background: #EFEAE6;
  padding: 25px 30px 40px;
  border-radius: 12px;
  margin-bottom: 60px;
}

.title {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #3b3b3b;
}

.subtitle {
  text-align: center;
  color: #6e6e6e;
  margin-bottom: 25px;
  font-size: 35px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 22px;
  margin-bottom: 30px;
}

.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;        
  align-items: center;           
  text-align: left;              
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img {
  width: 100%;
  height: auto;
  flex-shrink: 0;               
}

.card-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;   
  text-align: left;        
  width: 100%;              
}

.card-title {
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 4px;
}

.card-price {
  font-size: 25px;
  color: #222;
  margin-bottom: 4px;
}


.card-desc {
  color: #666;
  font-size: 30px;
}

.help-btn {
  display: block;
  margin: 0 auto;
  background: #f48f8f;
  color: #fff;
  padding: 12px 35px;
  border: none;
  border-radius: 100px;
  font-size: 40px;
  cursor: pointer;
  transition: 0.2s;
}

.help-btn:hover {
  background: #e97f7f;
}
</style>
