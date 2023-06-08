<template>
  <h1 class="label">
    Карта маршрута
  </h1>
  <div id="map" style="width: 100vw; height: 400px"></div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'yandex-section',
  mounted() {
    const cards = this.$store.state.cards
    const start_coords = [55.76, 37.64]
    const text_coords = [55.752, 37.655]

    ymaps.ready(() => {
      const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64 + 0.055 + 0.055],
        zoom: 13
      });



      for (let i = 0; i < cards.length; i++) {
        const card = cards[i]
        const text = card.title
        const image = card.image
        text_coords[1] += 0.055
        const myText = new ymaps.Placemark(text_coords, {
          iconContent: text,
        }, {
          preset: 'islands#redStretchyIcon',
        });

        start_coords[1] += 0.055
        const myImage = new ymaps.Placemark(start_coords, {}, {
          iconLayout: 'default#image',
          iconImageHref: image,
          iconImageSize: [110, 110],
          iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myImage);
        myMap.geoObjects.add(myText);
      }
    });
  },
  data() {
    return {
      coords: [54, 39],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: 'content',
        contentOffset: [35, 15],
        contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
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
