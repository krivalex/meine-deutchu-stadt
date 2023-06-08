<template>
  <section id="header">
    <navbar-component class="no-mobile" />
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
import NavbarComponent from '@/components/NavbarComponent.vue';

export default {
  name: 'header-section',
  components: {
    BeautifulImage,
    NavbarComponent
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
  justify-content: center;
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


@media screen and (max-width: 768px) {

  #header {
    height: 500px;
  }

  .name-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: calc(1220/1920 * 100%);
    height: 80%;
    gap: 0px;
  }

  .no-mobile {
    display: none;
  }

  .name {
    text-align: center;
  }

}
</style>
