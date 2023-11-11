<script setup>
  import {ref} from 'vue'
  import {  Search} from '@element-plus/icons-vue'
  let headlist=ref([
    {title:'首页',path:'/index'},
    {title:'音乐地图',path:'/music_house'},
    {title:'音乐库',path:'/database'},
    {title:'关于我们',path:'/overview'},
  ])
  
  </script>


<template>
    <div class="header">
        <div class="header-list">
          <div class="header-top">
            <!-- 一部分 -->
            <div class="logo">
              <a href="#" title='MetaFolk'>
                <img src="../assets/img/logo.png" alt="Meti fork">
              </a>
            </div>
            <!-- 二部分 -->
            <ul class="header-menu">
              <li v-for="(v,i) in headlist" :key="i">
                <router-link :to=v.path>
                  <span>
                    {{ v.title }}
                  </span>
                  
                </router-link>
              </li>
            </ul>
            <!-- 三部分 -->
            <div class="header-right">
              <div class="search-box">
               <input type="text" placeholder="搜索">
               <el-button type="primary" :icon="Search">Search</el-button>
              </div>
            
            </div>
          
          </div>
    </div>
    </div>
  </template>
  
  
  
  <style scoped>
  /* 页面头部 */
.header{
    height:70px;
}
/* 固定定位 */
.header-list{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:70px;
    background-color: #fff;
    box-shadow:0 5px 5px rgba(0,0,0);
}
.header-top{
    width:1280px;
    height:70px;
    margin:auto;
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.log{
  width:200px;
}
/* logo */
/* .logo a{
        background:url(../assets/img/logo.png) no repeat center center;
        width:20px;
        height: 20px;
        display:inline-block;
        background-size: contain;
} */
.logo a {
  display: flex; /* 让链接内的内容成为一个弹性容器  行内元素设置宽高无效 */
  align-items: center; /* 垂直居中 */
  text-decoration: none; /* 移除链接的下划线样式 */
}

.logo img {
  width: 30px; /* 设置图标宽度 */
  height: 30px; /* 设置图标高度 */
  margin-right: 5px; /* 可选：添加右侧间距 */
  /* 其他样式属性 */
}
/* 头部导航 */
.header-top ul{
  flex:1;
    display:flex;
}
.header-menu  li{
  margin: 0 50px;
  list-style: none;
  position: relative; /* 添加相对定位，用于下划线效果 */
}

.header-menu li span{
  font-size:16px;
  font-weight:700;
}
.header-menu  li span:hover{
  color:#4043ff;
}
.header-menu li::before
{
  content: '';
    position: absolute;
    bottom: -10px; /* 修改为0，使下划线在文字下方 */
    left: 50%;
    width: 0;
    height: 3px; /* 控制下划线的高度 */
    background-color: #0054b3; /* 使用背景色代替border */
    transition: all 0.2s;
}
.header-menu li:hover::before{
  content:'';
  width:100%;
  left:0;
}

.header-menu  li a{
  text-decoration: none;
}
.search-box {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.search-box input {
  border: none;
  outline: none;
  padding: 5px;
  width: 200px;
}

.search-box button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.search-box button:hover {
  background-color: #0056b3;
}
</style>
  