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
        <h1>{{ place.name }}</h1>
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
    place() {
      return this.$store.state.place
    }
  }
}

</script>

<style scoped>
</style>
