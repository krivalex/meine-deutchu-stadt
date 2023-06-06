<template>
  <section id="places">
    <h1 class="label">
      Увлекательный маршрут по городу
    </h1>
    <div class="cards">
      <CardItem v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </section>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'places-section',
  components: {
    CardItem
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    }
  }
}
</script>

<style scoped>
#places {
  min-width: calc(1216/1920 * 100%);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  margin-top: 160px;
  flex-direction: column;
}

.label {
  min-width: calc(1216/1920 * 100%);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  font-family: komikax, regular;
  color: #5C5754;
  font-size: 22px;
}
</style>
