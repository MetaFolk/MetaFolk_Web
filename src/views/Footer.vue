<script>
  import {ref} from 'vue'
  import music from '@/assets/music.svg' 
  export default{
    data(){
      return{
        music,
      }
    }
  }
  </script>


<template>
      <el-row class="row-bg" justify="space-between">
    <el-col :span="1"><div class="grid-content ep-bg-purple" style="text-align:center;" />
      <img src="@/assets/music.svg" style="max-height: 100px;width: 100px;text-align:center;"/>
    </el-col>
    <el-col :span="2"><div class="grid-content ep-bg-purple-light" />
      友情链接
    </el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" />
      <a href="https://kjc.snnu.edu.cn/info/1089/9270.htm"  title="陕西师范大学民歌智能与服务技术文化和旅游部重点实验室">陕西师范大学民歌智能与服务技术文化和旅游部重点实验室</a>
    </el-col>
  </el-row>
  </template>
  
  
  
  <style scoped>
  
  </style>
  