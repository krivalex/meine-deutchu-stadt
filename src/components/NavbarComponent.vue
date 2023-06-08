<template>
  <div class="header-navbar">
    <img src="@/assets/logo.png">
    <div class="navbar">
      <router-link to="/">Алматы</router-link>
      <router-link to="/">Астана</router-link>
      <router-link to="/">
        Другие
        <img class="arrow-down" src="@/assets/chevron-down.png" alt="arrow-down" />
      </router-link>
      <router-link to="/">О нас</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar-component',
  components: {
  },
  computed: {
  },
}
</script>

<style scoped>
.navbar {
  width: 488px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: #5C5754;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 29px;
}

.navbar router-link {
  color: #5C5754;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-decoration: none;
}

.navbar a {
  color: #5C5754;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.arrow-down {
  max-width: 24px;
  max-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.header-navbar {
  padding-top: 30px;
  height: 150px;
  width: 63%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: calc(488/1920);
}

.header-navbar img {
  mix-blend-mode: multiply;
}
</style>
