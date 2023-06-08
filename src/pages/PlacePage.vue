<template>
  <section id="place">
    <div class="name-image">
      <div class="name">
        <h1>{{ place.id }}. {{ place.title }}</h1>
        <h2>прогулка по «немецкой» истории города</h2>
      </div>
      <beautiful-image class="no-mobile" />
    </div>

  </section>
</template>

<script>
import BeautifulImage from '@/components/BeatifulImage.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'header-section',
  components: {
    BeautifulImage
  },
  computed: {
    place() {
      const route = useRoute();
      return this.$store.state.cards[route.params.id - 1]
    }
  }
}

</script>

<style scoped>
#place {
  background: url('@/assets/main-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

}

.name-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 19%;
  gap: calc(192/1920 * 100%);
  width: calc(1220/1920 * 100%);
  margin-top: 70px;
}

.name {
  font-family: komikax;
}

.name h1 {
  font-size: 36px;
  line-height: 156.9%;
  color: #5C5754;
  width: 120%;
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

@media screen and (max-width: 768px) {

  #header {
    min-height: 800px;
  }

  .name-image {
    flex-direction: column;
  }

  .name h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 20px;
    width: 100%;
  }

  .header-navbar {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 50px 0;
  }

  .no-mobile {
    display: none;
  }
}
</style>
