<template>
  <div>
    <div class="wrapper" v-bind:style="{ opacity: getMountOpacity }">
      <div
        class="info_left_div"
        v-bind:style="{ transform: 'translateX(' + getLeftPos + ')' }"
      >
        <home-info-img
          imgSrc="apartment_inside.jpg"
          titleText="별 당신은 이름과"
          contentText="이름과, 멀듯이, 밤을 하나에 당신은 너무나 별 봅니다. 당신은 써 나의 강아지, 때 이름자 있습니다."
        />
      </div>
      <div
        class="info_right_div"
        v-bind:style="{ transform: 'translateX(' + getRightPos + ')' }"
      >
        <home-info-img
          imgSrc="apartment_outside.jpg"
          titleText="가난한 파란 멀리 비둘기"
          contentText="계집애들의 헤는 우는 패, 시인의 불러 하나에 까닭입니다. 가을로 이국 쓸쓸함과 지나고 이웃 거외다. 남은 별 아직 하나에 있습니다. 
          추억과 별 이네들은 그리워 봅니다. 지나가는 까닭이요, 말 나는 계절이 별에도 하나에 겨울이 거외다. 
          노루, 자랑처럼 불러 이국 멀리 이 봅니다. 묻힌 멀듯이, 나는 까닭이요, 차 하늘에는 때 벌레는 둘 듯합니다. 노루, 강아지, 지나고 새워 라이너 있습니다."
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeInfoImg from "./HomeInfoImg.vue";
export default {
  data() {
    return {
      style: {
        leftPos: "-100%",
        rightPos: "100%",
        mountOpacity: 0,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.changePos();
      }, 300);
    });
  },
  components: { HomeInfoImg },
  computed: {
    getLeftPos() {
      return this.style.leftPos;
    },
    getRightPos() {
      return this.style.rightPos;
    },
    getMountOpacity() {
      return this.style.mountOpacity;
    },
  },
  methods: {
    changePos() {
      this.style.leftPos = "0%";
      this.style.rightPos = "0%";
      this.style.mountOpacity = 1;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  transition: opacity 1.2s;
}
.info_left_div {
  width: 40%;
  height: 500px;
  margin-right: 20px;
  transition: transform 1.2s;
}
.info_right_div {
  position: relative;
  width: 60%;
  height: 500px;
  transition: transform 1.2s;
}
</style>
