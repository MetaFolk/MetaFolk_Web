import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/index.js'  // ./同级  ../上一级   @/ 根目录src
/* import ElementPlus from 'element-plus'; */
/* import 'element-plus/lib/theme-chalk/index.css'; */
import * as echarts from 'echarts'; // 引入 ECharts 库
import china from '@/assets/json/map.json'; // 假设这是你的地图数据文件

echarts.registerMap('china', china);

const app=createApp(App)
app.use(router)
app.config.globalProperties.$echarts = echarts;
/* .use(ElementPlus) */
app.mount('#app')
