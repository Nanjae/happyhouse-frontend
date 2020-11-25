<template>
  <div v-bind:style="{ opacity: getSearchOpacity, transition: 'opacity 1.2s' }">
    <div class="wrapper">
      <div class="title_text">{{ titleText }}</div>
      <div class="<div" v-for="data in topSearchData" :key="data.index">
        <div class="content_text">{{ data.keyword }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { predataTop10 } from "../../predata.js";

export default {
  data() {
    return {
      topSearchData: [],
    };
  },
  props: { titleText: String, contentText: String },
  methods: {
    setSearchData(data) {
      this.topSearchData = JSON.parse(JSON.stringify(data));
    },
    getSearchData() {
      return new Promise((resolve) => {
        resolve(predataTop10);
      });
    },
  },
  mounted() {
    this.getSearchData().then((result) => {
      console.log("탑10 데이터 가져오기 완료!");
      this.setSearchData(result);
    });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  color: white;
}
.title_text {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 40px;
}
.content_text {
  font-size: 20px;
  font-weight: 300;
}
</style>
