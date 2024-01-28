<script setup>
  import {ref,computed,onMounted} from 'vue'
  import { Search} from '@element-plus/icons-vue'
  import axios from 'axios';
  const form = {
  songid: ref(''),
  songname: ref(''),
  songintroduction: ref(''),
  songclass: ref(''),
  singer: ref(''),
  songtime: ref(''),
  songsearch:ref(''),
  songarea:ref('')
  }
  async function searchsong() {
  try {
    const response = await axios.get(`/api/search/tag?tag=${encodeURIComponent(form.songsearch.value)}`);
    
    if (response.status === 200) {
      musicList.value = response.data.music_list;
    } else {
      console.error('Error fetching songs: ', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}
const props = defineProps({
  musicList: {
    type: Array,
    default: () => [],
  },
});
const currentPage = ref(1);
const pageSize = ref(10);
const songs = ref([]);
let audio = null;

const playSong = (song) => {
  if (audio) {
    audio.pause();
    audio.src = song.url;
  } else {
    audio = document.createElement("audio");
    audio.src = song.url;
    audio.play();
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    loadSongs();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    loadSongs();
  }
};

const loadSongs = () => {
  songs.value = props.musicList
    .slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
    .map((song) => ({
      title: song.title,
      artist: song.artist,
      image: song.image,
      url: song.url,
    }));
};

const totalPages = computed(() => {
  if (props.musicList && props.musicList.length) {
    return Math.ceil(props.musicList.length / pageSize.value);
  } else {
    return 0;
  }
});

onMounted(() => {
  songs.value = props.musicList.slice(0, pageSize.value);
});
</script>

<template>
    <div>
      <div>
        <div style="width: 1000px;background-color: antiquewhite;height: 33px;font-size: 25px ;font-weight: bold">精确筛选</div>
        <hr>
        <el-form   label-width="100px">
          <el-form-item label="地区" prop="region">
            <el-select v-model="form.songarea" placeholder="请选择">
              <el-option label="陕北" value="陕北"></el-option>
              <el-option label="华中" value="华中"></el-option>
              <el-option label="华南" value="华南"></el-option>
              <el-option label="东北" value="东北"></el-option>
            </el-select>
          </el-form-item>
          <hr>
          <el-form-item label="歌曲分类">
            <el-select v-model="form.class" placeholder="请选择">
              <el-option label="戏剧" value="戏剧"></el-option>
              <el-option label="小调" value="小调"></el-option>
            </el-select>
          </el-form-item>
          <hr>
          <el-form-item label="歌手">
            <el-select v-model="form.singer" placeholder="请选择">
              <el-option label="小王" ></el-option>
              <el-option label="小刘" value="小调"></el-option>
            </el-select>
          </el-form-item>
          <hr>
          <el-form-item label="歌曲名称" >
            <el-input v-model="form.songname.value" placeholder="请输入">
            </el-input>
          </el-form-item>
        </el-form>
        <el-button @click="searchsong()">查找</el-button>
      </div>
      <div class="music-list">
        <ul>
          <li v-for="(song, index) in songs" :key="index">
            <img :src="song.image" alt="Album Cover" @click="playSong(song)">
            <h2>{{ song.title }}</h2>
            <p>{{ song.artist }}</p>
            <audio :src="song.url" ref="audio"></audio>
          </li>
        </ul>
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
     </div>
    </div>
  </template>
  
  <style scoped>
  
  </style>

