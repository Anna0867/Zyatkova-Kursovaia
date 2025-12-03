<template>
  <footer class="site-footer">
    <div class="footer-inner">
        <div class="footer-left">
            <div class="footer-row">  
                <div class="footer-block">
                    <div class="footer-title">Телефон:</div>
                    <div class="footer-text">+8 (800) 555-35-35</div>
                </div>

                <div class="footer-block">
                    <div class="footer-title">e-mail:</div>
                    <div class="footer-text">HomeCare@gmail.com</div>
                </div>
            </div>

            <div class="footer-block">
                <div class="footer-title">Адрес главного офиса:</div>
                <div class="footer-text">г. Владивосток ул. Верхнепортовая д. 2</div>
            </div>
        </div>

      <div class="footer-right">
        <div class="footer-block">
          <div class="icons">
            <a href="https://t.me/HomeACareKyrsovaya"><img src="/assets/icons/Telegram.svg" alt="TG" ></a> 
            <a href="https://vk.com/club234370229"><img src="/assets/icons/VK.svg" alt="VK"></a>
          </div>
          <div class="footer-title">Время работы:</div>
          <div class="footer-text">Круглосуточно</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.site-footer {
  width: 100%;
  background: #DEDAD4; /* как макет */
  padding: 40px 0;
  margin-top: auto;
}

.footer-row {
  display: flex;
  gap: 40px;
}

.footer-inner {
    max-width: 100%;
  margin: 0 auto;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-block {
  margin-bottom: 16px;
}

.footer-title {
  font-size: 20px;
  color: #2E2723;
  font-weight: 500;
}

.footer-text {
  font-size: 20px;
  color: #7B7570;
}

.icons {
  display: flex;
  align-items: center;
}
</style>
