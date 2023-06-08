<template>
  <section id="history">
    <div class="content">
      <div class="name-image">
        <img class="responsive-image" :src="image" alt="history">
        <div class="text">
          <p>
            Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С
            середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого
            происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и
            исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья
            Баум и другие.
          </p>
          <br />
          <p>
            В советский период истории в нашем городе жили и работали немцы – представители творческой и научной
            интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в
            1941
            г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с
            ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана,
            переехали в Алма-Ату.
          </p>
          <br />
          <p>
            <strong>
              Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении
              достойной памяти о нем!
            </strong>
          </p>
        </div>
      </div>
      <div class="button-pdf">
        <button @click="downloadPDF">
          Скачать маршрут: Увлекательный маршрут по городу
          <img src="@/assets/pdf-image.png" alt="pdf-image" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  name: 'history-section',
  components: {
  },
  computed: {
    image() {
      return require("@/assets/mainPhoto/header-image.png");
    }
  },
  methods: {
    downloadPDF() {
      const pdf = new jsPDF();
      pdf.save("Увлекательный маршрут по городу.pdf");
    }
  }
}
</script>

<style scoped>
.content {
  min-width: calc(1216/1920 * 100%);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  margin-top: 160px;
  flex-direction: column;
}

.name-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 55px;
  min-width: calc(1216/1920 * 100%);
}

.name-image img {
  min-width: calc(460/1920 * 100%);
}

.text {
  width: 700px;
}

.text p {
  font-family: 'Montserrat', sans-serif;
  color: #72767E;
  font-size: 18px;
  mix-blend-mode: multiply;
}

.button-pdf button {
  width: 1216px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  justify-content: center;
  border: 3px dashed #AB9995;
  border-radius: 30px;
  height: 110px;
  background-color: transparent;
  font-family: komikax, regular;
  color: #5C5754;
  font-size: 18px;
  line-height: 154%;
  margin-top: 71px;
  cursor: pointer;
}

.responsive-image {
  border-radius: 114px;
  width: 460px;
  height: 529px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  #history {
    width: 1280px;
    margin: 0 auto;
    transform: scale(0.8);
  }
}
</style>
