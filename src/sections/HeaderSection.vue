<template>
  <section id="header">
    <div class="header-navbar">
      <img src="@/assets/logo.png">
      <div class="navbar">
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
  background-position: center;
  width: 100%;
  height: 78vh;
}

.name-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 368.6px;
  gap: 192px;
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
}

.header-navbar img {
  width: 170px;
  mix-blend-mode: multiply
}
</style>
