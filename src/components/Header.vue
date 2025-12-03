<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/"> <img src="/assets/icons/Logo.svg" alt="" class="logo"> </router-link>

      <nav class="main-nav">
        <ul>
          <li>
            <router-link to="/about" class="nav-link">О нас</router-link>
          </li>
          <li>
            <a href="/#volunteer" class="nav-link">Волонтерство</a>
          </li>
          <li>
            <router-link to="/pets" class="nav-link">Питомцы</router-link>
          </li>
          <li>
            <router-link to="/contacts" class="nav-link">Контакты</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.logo{
  width: 350px;
}
.site-header {
  width: 100%;
  background: #DEDAD4;
  padding: 20px 0;
}

.header-inner {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
}

.logo {
  font-size: 40px;
  font-weight: 400;
  color: #3A2E28;
  font-family: 'Arial', sans-serif;
}

/* Навигация */
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 50px;
  padding: 0;
  margin: 0;
}

.nav-link {
  font-size: 24px;
  font-weight: 400;
  color: #3A2E28;
  text-decoration: none;
  transition: 0.2s;
}

.nav-link:hover {
  color: #f59870;
}

/* Активная ссылка */
.router-link-active {
  color: #f59870;
}
</style>
