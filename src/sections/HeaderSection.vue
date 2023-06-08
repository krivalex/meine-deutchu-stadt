<template>
  <section id="header">
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
    <div class="name-image">
      <div class="name">
        <h1>Алматы</h1>
        <h2>прогулка по «немецкой» истории города</h2>
      </div>
      <beautiful-image />
    </div>

  </section>
</template>

<script>
import BeautifulImage from '@/components/BeatifulImage.vue'

export default {
  name: 'header-section',
  components: {
    BeautifulImage
  },
  computed: {
    image() {
      return require("@/assets/mainPhoto/header-image.png");
    }
  }
}
</script>

<style scoped>
#header {
  background: url('@/assets/main-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
}

.name-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 19%;
  gap: calc(192/1920 * 100%);
  width: calc(1220/1920 * 100%);
}

.name {
  font-family: komikax;

}

.name h1 {
  font-size: 56px;
  line-height: 156.9%;
  color: #5C5754;
}

.name h2 {
  font-size: 12px;
  line-height: 180%;
  color: #AB9995;
  width: 310px;
}

.header-navbar {
  padding-top: 30px;
  height: 150px;
  width: 63%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(1220/1920 * 100%);
}

.header-navbar img {
  mix-blend-mode: multiply;
}


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

@media screen and (max-width: 768px) {
  #header {
    min-width: 1280px;
  }

  .name-image {
    margin: 0 10%;
  }
}
</style>
