<template>
  <div @mouseover="overButton" @mouseout="outButton">
    <div class="info_img_div">
      <img
        class="info_bg_img"
        :src="require(`@/assets/images/homeinfo/${imgSrc}`)"
      />
      <div class="info_bg_opacity" v-bind:style="{ opacity: getOpacity }"></div>
      <div class="info_text_div">
        <div class="textWrapper">
          <div class="left_div">
            <div class="title_sub">오늘은 무슨 일이?</div>
            <div class="title_text">부동산 주요 뉴스</div>
            <div
              class="more_button"
              v-on:click="
                openNewPage('https://land.naver.com/news/headline.nhn')
              "
            >
              뉴스 더 보기
            </div>
          </div>
          <div class="right_div">
            <div
              class="content_box"
              v-on:click="
                openNewPage(
                  'https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=629&arti_id=0000054247'
                )
              "
            >
              <div class="index_number">1</div>
              <div class="content_text">
                서울 집값 기본 10억 원 시대'…종부세 기준 9억 원→12억 원 바뀔까
              </div>
            </div>
            <div
              class="content_box"
              v-on:click="
                openNewPage(
                  'https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=421&arti_id=0005010840'
                )
              "
            >
              <div class="index_number">2</div>
              <div class="content_text">
                임대차3법에 대비하나…'분쟁조정위'늘리고, 85억원 예산도 배정
              </div>
            </div>
            <div
              class="content_box"
              v-on:click="
                openNewPage(
                  'https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=023&arti_id=0003578607'
                )
              "
            >
              <div class="index_number">3</div>
              <div class="content_text">
                좁아도 너무 좁다, 신혼 매입임대 80%가 36㎡ 안돼
              </div>
            </div>
            <div
              class="content_box"
              v-on:click="
                openNewPage(
                  'https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=023&arti_id=0003578584'
                )
              "
            >
              <div class="index_number">4</div>
              <div class="content_text">
                “최대 6억 매입”→“평균 6억 매입” 말바꾸기… 빌라값도 들쑤시는...
              </div>
            </div>
            <div
              class="content_box"
              v-on:click="
                openNewPage(
                  'https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=005&arti_id=0001384336'
                )
              "
            >
              <div class="index_number">5</div>
              <div class="content_text">
                종부세 ‘폭탄’ 날아왔지만… ‘버티기’ 계속될 듯
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { predataTop10 } from "../../predata.js";
export default {
  data() {
    return {
      style: { opacity: 0.5 },
      topSearchData: [],
      number: 0,
    };
  },
  props: {
    imgSrc: String,
  },
  computed: {
    getOpacity() {
      return this.style.opacity;
    },
  },
  methods: {
    openNewPage(link) {
      window.open(link);
    },
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
    overButton() {
      this.style.opacity = 0.8;
    },
    outButton() {
      this.style.opacity = 0.5;
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
.info_img_div {
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: flex-end;
}
.info_bg_opacity {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  transition: opacity 0.4s;
}
.info_bg_img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}
.info_text_div {
  position: absolute;
  display: flex;
  width: 75%;
  height: 70%;
}

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
  cursor: pointer;
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
