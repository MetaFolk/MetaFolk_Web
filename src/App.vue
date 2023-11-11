<script >
import Headmenu from './views/Headmenu.vue'
import Footer from './views/Footer.vue'
export default{
  components:{
    Headmenu,
    Footer,
  }
}
</script>

<template>
<Headmenu />
  <router-view />
 <Footer />
</template>


<style scoped>

</style>
