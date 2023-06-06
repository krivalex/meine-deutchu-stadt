<template>
  <section id="main-page">
    <header-section></header-section>
    <history-section></history-section>
    <places-section></places-section>
    <history-section class="joke"></history-section>
    <yandex-section></yandex-section>
  </section>
</template>

<script>
import HeaderSection from '@/sections/HeaderSection.vue'
import HistorySection from '@/sections/HistorySection.vue'
import PlacesSection from '@/sections/PlacesSection.vue'
import YandexSection from '@/sections/YandexSection.vue'

export default {
  name: 'main-page',
  components: {
    HeaderSection,
    HistorySection,
    PlacesSection,
    YandexSection
  }
}
</script>



<style>
.joke .content .name-image {
  flex-direction: row-reverse;
}
</style>
