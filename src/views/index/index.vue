  <script set up>
  import {ref} from 'vue'
  import Banner from './Banner.vue'
  import chinese_music_database from './chinese_music_database.vue'
  export default{
    components:{
      Banner,
      chinese_music_database,
    }
  }

  </script>

  <template>
    <Banner />
    <div class="container">
      <chinese_music_database />
    </div>
  </template>
  
  <style scoped>
  .container{
    width:1280px;
    margin:auto;
  }
  </style>