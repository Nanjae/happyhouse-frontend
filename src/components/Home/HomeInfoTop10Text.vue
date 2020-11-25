<template>
  <div class="textWrapper">
    <div class="left_div">
      <div class="title_sub">사용자가 검색한</div>
      <div class="title_text">키워드 TOP 10</div>
      <div class="more_button">키워드 더 보기</div>
    </div>
    <div class="right_div">
      <div
        class="content_box"
        v-for="(data, index) in topSearchData"
        :key="data.index"
      >
        <div class="index_number">{{ index + 1 }}</div>
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
      number: 0,
    };
  },
  methods: {
    getNumber() {
      this.number += 1;
      return this.number;
    },
    setSearchData(data) {
      this.topSearchData = JSON.parse(JSON.stringify(data.splice(0, 5)));
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
.textWrapper {
  display: flex;
  position: absolute;
  width: 100%;
  color: white;
}
.left_div {
  font-size: 18px;
}
.title_text {
  font-size: 36px;
  font-weight: 800;
}
.content_text {
  font-weight: 500;
}
.more_button {
  margin-top: 20px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 20px;
  border: 2px solid white;
  width: fit-content;
  cursor: pointer;
}
.left_div {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}
.right_div {
  display: flex;
  flex-direction: column;
}
.content_box {
  font-size: 20px;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.index_number {
  padding: 2px 8px;
  border-left: 2px solid #d38fff;
  /* border-bottom-right-radius: 15px; */
  border-top-left-radius: 15px;
  margin-right: 15px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
