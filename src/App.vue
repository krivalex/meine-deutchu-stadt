<template>
  <div class="navbar-main" v-show="showNavbar" v-if="$route.name !== 'place'">
    <router-link to="/">Алматы</router-link>
    <router-link to="/">Астана</router-link>
    <router-link to="/">
      Другие
      <img class="arrow-down" src="@/assets/chevron-down.png" alt="arrow-down" />
    </router-link>
    <router-link to="/">О нас</router-link>
  </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import '@/assets/styles/main.css'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      showNavbar: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const anchorElement = document.getElementById('header')

      if (anchorElement) {
        const rect = anchorElement.getBoundingClientRect()

        // Проверяем, если якорь за пределами видимости на экране
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          this.showNavbar = true
        } else {
          this.showNavbar = false
        }
      }
    }
  }
}
</script>

<style scoped>
.navbar-main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background-color: #ab9995;
  color: white;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 22px;
  font-family: komikax;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}


.navbar-main a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.arrow-down {
  margin-top: 7px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  filter: invert(0%);
}
</style>
