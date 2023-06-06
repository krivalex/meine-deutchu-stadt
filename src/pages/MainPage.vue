<template>
  <section id="main-page">
    <header-section></header-section>
    <history-section></history-section>
    <places-section></places-section>
  </section>
</template>

<script>
import HeaderSection from '@/sections/HeaderSection.vue'
import HistorySection from '@/sections/HistorySection.vue'
import PlacesSection from '@/sections/PlacesSection.vue'

export default {
  name: 'main-page',
  components: {
    HeaderSection,
    HistorySection,
    PlacesSection
  }
}
</script>



<style scoped>
</style>
