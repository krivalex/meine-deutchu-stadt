<template>
  <h1 class="label">
    Карта маршрута
  </h1>
  <yandex-map style="width: 100%; height: 300px" v-if="true" :coordinates="[55.099943, 50.706567]">
    <yandex-marker :coordinates="[55.099943, 50.706567]" :markerId="card.id.toString()" :icon="markerIcon">
    </yandex-marker>
  </yandex-map>
</template>

<script>
import { YandexMap, YandexMarker } from 'vue-yandex-maps';


export default {
  name: 'yandex-section',
  components: {
    YandexMap,
    YandexMarker
  },
  data() {
    return {
      markerIcon: {
        iconLayout: 'default#image',
        iconImageHref: require('@/assets/cards/1.png'),
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -15],
      }
    }
  },
  computed: {
    card() {
      console.log(this.$store.state.cards[0])
      return this.$store.state.cards[0]
    },
  },
}
</script>

<style scoped>
.label {
  min-width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  font-family: komikax, regular;
  color: #5C5754;
  font-size: 22px;
  margin: 80px 0;
}
</style>
