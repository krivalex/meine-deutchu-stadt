<template>
  <section id="main-page">
    <header-section></header-section>
    <history-section></history-section>
    <places-section></places-section>
    <history-section class="joke"></history-section>
    <yandex-section></yandex-section>
    <footer-section></footer-section>
  </section>
</template>

<script>
import HeaderSection from '@/sections/HeaderSection.vue'
import HistorySection from '@/sections/HistorySection.vue'
import PlacesSection from '@/sections/PlacesSection.vue'
import YandexSection from '@/sections/YandexSection.vue'
import FooterSection from '@/sections/FooterSection.vue'

export default {
  name: 'main-page',
  components: {
    HeaderSection,
    HistorySection,
    PlacesSection,
    YandexSection,
    FooterSection,
  }
}
</script>



<style>
#main-page {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joke .content .name-image {
  flex-direction: row-reverse;
}

@media screen and (max-width: 784px) {
  #main-page {
    width: 100vw;
    height: 100%;
  }

  .joke .content .name-image {
    flex-direction: column-reverse;
    margin-top: 30px;
  }
}
</style>
