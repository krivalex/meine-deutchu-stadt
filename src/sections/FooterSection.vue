<template>
  <section id="footer">
    <div class="class-content">

      <!-- <div class="red-line"></div> -->

      <div class="image-part">
        <img src="@/assets/logo.png">
      </div>

      <div class="text-info">
        <div class="cities">
          <div class="column">
            <p>Алматы</p>
            <p>Астана</p>
            <p>Павлодар</p>
          </div>
          <div class="column">
            <p>Петропавлск</p>
            <p>Семей</p>
            <p>Караганда</p>
          </div>
          <div class="column">
            <p>Тараз</p>
            <p>Актау</p>
            <p>Актобе</p>
          </div>
        </div>

        <div class="info">
          <p>О нас</p>
          <p class="small">Все права защищены</p>
        </div>

      </div>

    </div>
  </section>
</template>

<script>

export default {
  name: 'footer-section',
  components: {
  },
  computed: {
  },
}
</script>

<style scoped>
#footer {
  height: 275px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: #5C5754;
  mix-blend-mode: multiply;
  border-top: 3px dashed #F9CD02;
  margin-top: 30px;
  position: relative;
  width: 100vw;
}

.cities {
  width: 610px;
  display: flex;
  justify-content: center;
  gap: calc(436/1920 * 100%);
  align-items: center;
}

.info {
  width: 610px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
}

.class-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 100%;
}

.image-part {
  min-width: 40vw;
  height: 100%;
  border-top: 3px solid red;
  margin-top: -5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
}

.text-info {
  min-width: 60vw;
}

.image-part img {
  width: 172px;
  height: 152px;
  mix-blend-mode: multiply;
}


.small {
  font-size: 14px;
}

.red-line {
  height: 3px;
  width: 35vw;
  background-color: #ff0000;
  position: absolute;
  left: 0;
  top: -3px;
}

@media screen and (max-width: 784px) {

  #footer {
    width: 100vw;
    height: 200px;
  }

  .text-info {
    font-size: small;
    margin: 0 auto;
  }

  .image-part img {
    width: 122px;
    height: 102px;
    mix-blend-mode: multiply;
  }

  .cities {
    gap: 15px;
    max-width: 150px;
    margin: 0 auto;
  }

  .info {
    flex-direction: column;
    gap: 10px;
    max-width: 150px;
    margin: 0 auto;
  }

  .class-content {
    margin-left: 0px;
  }

}
</style>
