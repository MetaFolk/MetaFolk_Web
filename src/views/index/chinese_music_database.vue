<script >
import {ref} from 'vue'
import { Right, ElementPlus } from '@element-plus/icons-vue'
 import chinese_folk from '@/assets/img/chinese_folk.gif' 
 import router from '@/router/index.js'
/* import { requiredNumber } from 'element-plus/es/components/table-v2/src/common'; */
export default{
  data(){
        return{
             chinese_folk,
            showTooltip: false,
        };
      },
    components:{
        Right, 
        ElementPlus ,
    },
    methods: {
    showText() {
      this.showTooltip = true;
    },
    hideText() {
      this.showTooltip = false;
    },
  },
}

</script>

<template>
  <el-row :gutter="20">
    <el-col :span="6">
        <div class="grid-content ep-bg-purple" >
             <el-space direction="vertical">
                <el-text style="font-size: 29px; font-weight: bold; color: #eb7878;">
                    <el-icon>
                        <ElementPlus />
                    </el-icon>
                        MetaFolk-中国民歌
                </el-text>
                <el-row>
                    <el-text style="font-size: 20px; color: #000000;">
                      中国民歌作为中华民族音乐的重要组成部分，但在当今世界经济全球化的背景下，由于我国民歌文化有着极强的民族特色和地域风格，随着时间的流逝，熟知地方民间音乐的老艺人相继去世，导致、民歌的传承出现断层，
                      传承民歌刻不容缓。 MetaFolk项目立足于国家文化遗产保护的政策以及“科技+艺术”跨界融合的呼吁，为用户打造集趣味、智能、虚实为一体的元宇宙个人音乐平台。
                    </el-text>
                </el-row>
                <el-text style="color:#f0c70f;">
                     <el-button style="color:#d6e01c;" @click="$router.push('/database')">
                        查看全部
                     </el-button>
                     <el-icon>
                        <Right />
                    </el-icon>
                 </el-text>
            </el-space>
        </div>
    </el-col>
    <el-col :span="8" :offset="6">
        <div class="grid-content ep-bg-purple">
            <div class="chinese_folk">
              <img src="@/assets/img/chinese_folk.gif" alt="汉族" @mouseover="showText" @mouseout="hideText" style="max-height: 500px;width: 650px;"/>
              <div v-if="showTooltip" class="tooltip" >
                <h3 style="color:#f5f9f9">陕北民歌</h3>
                <h5 style="color:#f5f9f9">陕北民歌是历代陕北地方劳动人民精神、思想、感情的结晶，是陕北人民最亲近的伴侣，
                  是陕北地方劳动人民生活的最直接反映。 该库包含信天游、小调 、酒歌 、榆林小曲 等二十多种。
                </h5>
              </div>
              <div class="fixed-text" style="position: absolute; top: 0px; left: 0px;">
                <h4 style="color: #f5f9f9a7;font-size: 30px;font-weight: bold;">陕北民歌</h4>
                <p style="color: #f5f9f9a2;font-size: 28px;font-weight: bold;">
                  The Folk Songs of Northern Shannxi
                </p>
              </div>
            </div>
        </div>
    </el-col>
  </el-row>
 
  <el-row :gutter="20">
    <el-col :span="8" :offset="5">
        <div class="grid-content ep-bg-purple">
          <div class="chinese_folk">
              <img src="@/assets/img/minority.gif" alt="少数民族" @mouseover="showText" @mouseout="hideText" style="max-height: 300px;width: 500px;"/>
             <div v-if="showTooltip" class="tooltip" >
             <h3 style="color:#f5f9f9">民族民歌</h3>
             <h6 style="color:#f5f9f9">该库包含各地区的不同民族的民歌，
              主要为劳动号子、山歌、小调、长调和多声部歌曲，
              我国民族众多，幅员辽阔，各民族各地区的民歌也各具特色，绚丽多彩，又共同成为我国音乐文化发展的基础
            </h6>
            </div>
            <div class="fixed-text" style="position: absolute; top: 0px; left: 0px;">
                <h4 style="color: #f5f9f9a7;font-size: 30px;font-weight: bold;">民族民歌</h4>
                <p style="color: #f5f9f9a2;font-size: 28px;font-weight: bold;">
                  National Folk Songs
                </p>
            </div>
        </div>
        </div>
    </el-col>
    <el-col :span="6" :offset="4">
        <div class="grid-content ep-bg-purple">
          <div class="chinese_folk">
              <img src="@/assets/img/creation.jpg" alt="创作" @mouseover="showText" @mouseout="hideText" style="max-height: 300px;width: 300px;"/>
             <div v-if="showTooltip" class="tooltip" >
             <h3 style="color:#ffffff;font-size: 20px;">创作</h3>
            </div>
            <div class="fixed-text" style="position: absolute; top: 0px; left: 0px;">
                <h4 style="color: #f5f9f9a7;font-size: 30px;font-weight: bold;">创作</h4>
                <p style="color: #f5f9f9a2;font-size: 28px;font-weight: bold;">
                  Creation
                </p>
            </div>
            </div>
        </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.chinese_folk {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 10%; /* 将提示框显示在图片下方 */
  left: 50%; /* 将提示框水平居中对齐 */
  transform: translateX(-50%); /* 水平居中对齐 */
  background-color: #edb580ac;
  color: #fff;
  padding: 30px;
  border-radius: 200px;
  display: none;
}

.chinese_folk:hover .tooltip {
  display: block;
  }
</style>