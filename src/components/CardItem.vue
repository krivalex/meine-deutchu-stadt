<template>
  <div class="one-card" @click="redirectPlace">
    <img class="background" src="@/assets/mainPhoto/red-lines.png" alt="card.background">
    <div class="image-part">
      <img class="circle-image" :src="card.image" alt="card.image">
      <div class="number">
        <img class="buble" src="@/assets/mainPhoto/yellow-2.png" alt="card.background">
        <span>{{ card.number }}</span>
      </div>
    </div>
    <div class="text-part">
      <h1>{{ card.title }}</h1>
    </div>
  </div>
</template>

<script>


export default {
  name: 'one-card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectPlace() {

      this.$router.push(`/place/${this.card.id}`)
    }
  },
  components: {
  },
  computed: {
  }
}
</script>

<style scoped>
.one-card {
  width: 388px;
  height: 420px;
  position: relative;
}

.background {
  height: 333px;
  width: 371px;
  position: absolute;
}

.image-part {
  position: absolute;
  top: -5px;
  left: -10px;
  width: 100%;
  height: 333px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.buble {
  position: absolute;
  top: 45px;
  left: 57px;
  width: 58px;
  height: 58px;
}

.number span {
  position: absolute;
  top: 54px;
  left: 80px;
  font-family: komikax, regular;
  color: #5C5754;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
}

.text-part {
  position: absolute;
  font-family: komikax, regular;
  top: 333px;
  left: 0px;
  width: 100%;
  height: 87px;
  display: flex;
  font-size: 22px;
  color: #5C5754;
  justify-content: center;
  align-items: center;
}

.circle-image {
  width: 264px;
  height: 264px;
  border-radius: 50%;
}

@media screen and (max-width: 784px) {
  .number span {
    position: absolute;
    top: 55px;
    left: 82px;
    font-family: komikax, regular;
    color: #5C5754;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
  }
}
</style>
