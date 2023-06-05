<template>
  <div class="all-image">
    <img class="header-image" :src="image" alt="header image">

    <img class="line-decor design" src="@/assets/mainPhoto/red-lines.png">
    <img class="gray-line-decor design" src="@/assets/mainPhoto/gray-lines.png">

    <img class="design ellipse-yellow" src="@/assets/mainPhoto/yellow-2.png">
    <img class="design ellipse-red" src="@/assets/mainPhoto/red-2.png">
    <img class="design ellipse-red-line" src="@/assets/mainPhoto/red.png">
    <img class="design ellipse-yellow-line" src="@/assets/mainPhoto/yellow.png">
  </div>
</template>

<script>
export default {
  name: 'beautiful-image',
  components: {
  },
  computed: {
    image() {
      return require("@/assets/mainPhoto/header-image.png");
    }
  }
}

</script>

<style scoped>
#header {
  background-color: #F9F7F3;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.design {
  position: absolute;
  z-index: 10;
}

.header-image {
  width: 621px;
  height: 469px;
  left: 31px;
  top: 29px;
  object-fit: cover;
  border-radius: 219deg;
  z-index: 7;
  position: absolute;
}

.line-decor {
  top: 62px;
  left: 235px;
  width: 490px;
  height: 464px;
  z-index: 5;
}

.gray-line-decor {
  width: 417px;
  height: 387px;
  left: 0px;
  top: 110px;
  z-index: 5;
}

.all-image {
  position: relative;
  z-index: 10;
  width: 725px;
  height: 536px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ellipse-red-line {
  top: -3px;
  left: 66px;
  width: 162px;
  height: 153px;
}

.ellipse-yellow-line {
  top: 0px;
  left: 169px;
  width: 172px;
  height: 172px;
  z-index: 9;
}

.ellipse-yellow {
  top: 268px;
  left: 0px;
  width: 105px;
  height: 104px;
}

.ellipse-red {
  top: 249px;
  left: 61px;
  width: 48px;
  height: 49px;
}
</style>
