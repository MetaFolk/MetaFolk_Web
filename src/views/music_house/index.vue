<template>
    <div>
     <div
      ref="chinaMap"
      style="height: 1000px;border: solid 1px red;width: 100%;background: #fdfdfd;"
       >
      地图1
     </div>
    </div>
   </template>
   
   <script  setup>
   import * as echarts from 'echarts'
   import chinaJSON from '@/assets/json/map.json'
   import { onMounted, ref } from 'vue'
   const chinaMap = ref()
   onMounted(() => {
    drawChina()
   })
   let regions = [
    {
     name: '新疆维吾尔自治区',
     itemStyle: {
      areaColor: '#374ba4',
      opacity: 1,
     },
    },
    {
     name: '四川省',
     itemStyle: {
      areaColor: '#fe9b45',
      opacity: 1,
     },
     
    },
    {
     name: '陕西省',
     itemStyle: {
      areaColor: '#fd691b',
      opacity: 1,
     },
      // 陕西省特有的民歌信息
      song: '信天游：兰花花花花花花',
     // 陕西省特有的音乐链接
     //audio: require('@/assets/music/lanhua.mp4'), 
    },
    {
     name: '黑龙江省',
     itemStyle: {
      areaColor: '#ffc556',
      opacity: 1,
     },
    },
   ]
   let scatter = [
    { name: '北京', value: [116.46122, 39.97886, 9] },
    { name: '兰州', value: [103.86615, 36.040129, 9] },
    { name: '新疆', value: [87.613228, 43.810394, 9] },
    { name: '长沙', value: [112.915204, 28.207735, 9] },
    { name: '陕西省', value: [108.953445, 34.288842, 9] },
    { name: '云南', value: [102.710002, 25.045806, 9] },
   ]
   function drawChina() {
    let myChart = echarts.init(chinaMap.value)
    echarts.registerMap('china', chinaJSON) //注册可用的地图
    let option = {
     geo: {
      map: 'china',
      roam: true, //是否允许缩放，拖拽
      zoom: 1, //初始化大小
      //缩放大小限制
      scaleLimit: {
       min: 1, //最小
        max: 2, //最大
       },
       //设置中心点
       center: [115.97, 29.71],
       //省份地图添加背景
       regions: regions,
       itemStyle: {
        areaColor: '#0b122e',
        color: 'red',
        borderColor: '#232652',
        borderWidth: 2,
      },
      //高亮状态
      emphasis: {
        itemStyle: {
        areaColor: '#1af9e5',
         color: '#fff',
        },
       },
     },
     //配置属性
     series: {
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: scatter, 
      showEffectOn: 'render',
       rippleEffect: {
        //涟漪特效相关配置
        brushType: 'stroke', //波纹的绘制方式，可选 'stroke' 和 'fill'
          },
       hoverAnimation: true, //是否开启鼠标 hover 的提示动画效果
       label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等，
        
         formatter: '{b}',
         position: 'right',
         show: true,
        
       },
       itemStyle: {
       //图形样式，normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时
        normal: {
         color: '#ffffff', //散点的颜色
         shadowBlur: 10,
         shadowColor: 20,
         fontSize: '12px',
        },
       },
       zlevel: 1,
       tooltip: {
          show: true,        
          formatter: function (params) {
            // 根据省份获取对应的民歌信息
           // console.log('Province Name:', params.name);
            const regionData = regions.find(region => region.name === params.name);
          //  console.log('Region Data:', regionData);
             return `民歌: ${regionData ? regionData.song : '未知'}`;
          },
        }
      },
    }
    myChart.setOption(option)
    
  myChart.on('mouseover', 'series', function (params) {
      console.log('Mouse over:', params);
    const regionData = regions.find(region => region.name === params.name)
    console.log('2.regionData',regionData)
    if (regionData && regionData.name === '陕西省') {
      // 显示文本框
      console.log('3.regionData',regionData.song)
      showTextBox(regionData)
    }
  })


  // 添加鼠标离开事件，隐藏文本框
  myChart.on('mouseout', 'series', function () {
    // 隐藏文本框
    hideTextBox()
  })

  // 添加点击事件，点击播放对应省份的音乐
  myChart.on('click', function (params) {
    const regionData = regions.find(region => region.name === params.name)
    // 在这里可以处理播放音乐的逻辑，使用 regionData.audio 播放音乐
    // 例如，可以使用 HTML5 Audio API 播放音乐
    // const audio = new Audio(regionData.audio)
    // audio.play()
  })
}

function showTextBox(regionData) {
  console.log('Show text box:', regionData.name);
  const textBox = document.createElement('div');
  textBox.className = 'text-box';
  textBox.innerHTML = regionData.song;
  textBox.style.position = 'absolute';
  textBox.style.top = '550px'; // 调整为适当的位置
  textBox.style.left = '50%'; // 调整为适当的位置
  textBox.style.transform = 'translateX(-50%)'; // 居中显示
  textBox.style.zIndex = '99999999'; // 设置较高的层级

    document.body.appendChild(textBox);

  document.body.appendChild(textBox);

  // 添加点击事件，点击播放音乐
  textBox.addEventListener('click', function () {
    // 在这里可以处理点击播放音乐的逻辑，使用 regionData.audio 播放音乐
    // 例如，可以使用 HTML5 Audio API 播放音乐
    const audio = new Audio(regionData.audio);
    audio.play();
  });
}


// 隐藏文本框的函数
function hideTextBox() {
  console.log('Hide text box');
  const textBox = document.querySelector('.text-box')
  if (textBox) {
    //textBox.parentNode.removeChild(textBox)
    document.body.removeChild(textBox);
  }
}
   </script>
   <style>
   .text-box {
  background-color: #89fa83; /* 设置背景颜色 */
    }
  </style>