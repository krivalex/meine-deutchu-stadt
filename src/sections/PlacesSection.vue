<template>
  <section id="places">
    <h1 class="label">
      Увлекательный маршрут по городу
    </h1>
    <div class="cards">
      <img class="backfround-lines" :style="{ clipPath: 'inset(0 0 ' + line_height + ' 0)' }"
        src="@/assets/full-vector.png" alt="background-lines" />
      <CardItem v-for="(card, index) in cards" class="card-item"
        :style="[{ left: card_position[index].x, top: card_position[index].y, }]" :key="card.id" :card="card" />
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
  setup() {
    return {
      card_position: [
        {
          height: '0px',
          x: '26px',
          y: '0px',
        },
        {
          height: '139px',
          x: '581px',
          y: '60px',
        },
        {
          height: '552px',
          x: '26px',
          y: '473px',
        },
        {
          height: '696px',
          x: '766px',
          y: '529px',
        },
        {
          height: '909px',
          x: '421px',
          y: '830px',
        },
        {
          height: '1113px',
          x: '0px',
          y: '1020px',
        },
        {
          height: '1402px',
          x: '800px',
          y: '1243px',
        },
        {
          height: '1675px',
          x: '156px',
          y: '1560px',
        },
        {
          height: '1762px',
          x: '639px',
          y: '1680px',
        }

      ]
    }
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
    line_height() {
      const lastElement = this.$store.state.cards.length - 1;
      const number = 1762 - Number(this.card_position[lastElement].height.slice(0, -2))
      const result = number + 'px';
      return result;
    }
  },
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
  ;
}

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
}

.backfround-lines {
  min-height: 1762px;
  min-width: 791px;
  position: absolute;
  top: 86px;
  left: 172px;
  z-index: 0;
}

.cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1188px;
  margin: 0 auto;
  height: 2100px;
  margin-top: 40px;
}

.card-item {
  position: absolute;
}

@media screen and (max-width: 768px) {
  .label {
    min-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .cards {
    width: 100%;
    margin: 0 50px;
  }
}
</style>
