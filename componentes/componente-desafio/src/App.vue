<template>
  <v-app>
    <Menu></Menu>
    <Carousel></Carousel>
    <Header></Header>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Menu from './components/menuToolbar.vue'
import Carousel from './components/carousel.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'

export default {
  components: { Menu, Carousel, Header, Footer }
}
</script>
