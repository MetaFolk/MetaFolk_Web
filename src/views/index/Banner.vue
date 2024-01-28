<script setup>  
import {ref} from 'vue'
let backImg = ref([
  {img:new URL('../../assets/img/1.jpg', import.meta.url).href,id:1},
  {img: new URL('../../assets/img/2.jpg',import.meta.url).href,id:2},
  {img: new URL('../../assets/img/3.jpg',import.meta.url).href,id:3},
]
)

  </script>

  <template>
    <div class="banner">
        <div class="banner-list">   
          <el-carousel height="800px">
            <el-carousel-item v-for="(item,index) in backImg" :key="index" style="height:700px">
              <img :src="item.img" alt="" style="height: 100%;width: 100%"/>
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