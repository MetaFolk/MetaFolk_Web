<script setup>  
import {ref} from 'vue'
let backImg = ref([
  {img:new URL('../../assets/img/banner1.jpg', import.meta.url).href,id:1},
  {img: new URL('../../assets/img/banner2.jpg',import.meta.url).href,id:2},
  {img: new URL('../../assets/img/banner3.jpg',import.meta.url).href,id:3},
]
)

  </script>

  <template>
    <div class="banner">
        <div class="banner-list">   
          <el-carousel height="600px">
            <el-carousel-item v-for="(item,index) in backImg" :key="index" style="height:600px">
              <img :src="item.img" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>

  </template>
  
  <style scoped>
  .banner-list{
    max-width:1920px;
    margin:auto;
  }
  .banner-list.el-carousel__item>img{
    width:100%;
    height:600px;
    object-fit: cover;
    background-position: center center;
    background-repeat:no-repeat ;
    background-size: cover;
  }
    </style>