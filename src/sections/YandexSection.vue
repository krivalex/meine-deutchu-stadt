<template>
  <h1 class="label">
    Карта маршрута
  </h1>
  <yandex-map style="width: 100%; height: 300px" v-if="true" :coordinates="[55.099943, 50.706567]">
    <yandex-marker-cluster>
      <yandex-marker :coordinates="[55.099943, 50.706567]" :markerId="card.id.toString()" :marker-type="Polyline">
        <CardItem :card="card" />
      </yandex-marker>
    </yandex-marker-cluster>
  </yandex-map>
</template>

<script>
import { YandexMap, YandexMarker, YandexMarkerCluster } from 'vue-yandex-maps';
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'yandex-section',
  components: {
    YandexMap,
    YandexMarker,
    YandexMarkerCluster,
    CardItem,
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
