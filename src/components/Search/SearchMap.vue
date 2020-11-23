<template>
  <div class="wrapper">
    <div
      id="map"
      class="search_map_div"
      v-bind:style="{ opacity: getMapOpacity }"
    ></div>
  </div>
</template>

<script>
const naver = window.naver;
const kakao = window.kakao;

export default {
  data() {
    return {
      isReady: false,
      cx: 0,
      cy: 0,
      range: 500,
      mapOpacity: 0,
    };
  },
  computed: {
    getMapOpacity() {
      return this.mapOpacity;
    },
  },
  methods: {
    setMapOpacity() {
      this.mapOpacity = 1;
    },
    getHouseList() {
      return new Promise((resolve) => {
        const queryObj = {
          x: this.cx,
          y: this.cy,
          housetype: this.$route.query.housetype - 0,
          searchtype: this.$route.query.searchtype - 0,
          range: this.range,
        };
        console.log(queryObj);
        resolve(true);
      });
    },
    getGeoCoords() {
      return new Promise((resolve) => {
        var ps = new kakao.maps.services.Places();

        ps.keywordSearch(this.$route.query.term, placesSearchCB);

        function placesSearchCB(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            console.log(data);
            const coords = { x: data[0].y - 0, y: data[0].x - 0 };
            resolve(coords);
          }
        }
      });
    },
    initMap(x, y) {
      console.log(x, y);
      return new Promise((resolve) => {
        this.map = new naver.maps.Map(document.getElementById("map"), {
          center: new naver.maps.LatLng(x, y),
          zoom: 16,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.RIGHT_TOP,
          },
          scrollWheel: false,
        });
        resolve(true);
      });
    },
  },
  mounted() {
    this.getGeoCoords().then((result) => {
      this.cx = result.x;
      this.cy = result.y;
      this.getHouseList().then(() => {
        console.log("요청완료!");
        this.initMap(this.cx, this.cy).then(() => {
          console.log("맵 생성 완료!");
          this.setMapOpacity();
        });
      });
    });
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 800px;
  /* background-color: rgba(255, 255, 150, 0.05); */
}
.search_map_div {
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: opacity 1.2s;
}
</style>
