<template>
  <div class="wrapper">
    <div
      id="map"
      class="search_map_div"
      v-bind:range="getRange"
      v-bind:style="{ opacity: getMapOpacity }"
    ></div>
    <div
      class="search_detail_wrapper"
      v-bind:style="{ opacity: getMapOpacity }"
    >
      <div class="search_range_div">
        <div class="search_range_box">
          <common-button
            buttonName="250m"
            textColor="#bbbbbb"
            isRange
            v-bind:range="250"
          ></common-button>
          <common-button
            buttonName="500m"
            textColor="#bbbbbb"
            isRange
            v-bind:range="500"
          ></common-button>
          <common-button
            buttonName="750m"
            textColor="#bbbbbb"
            isRange
            v-bind:range="750"
          ></common-button>
          <common-button
            buttonName="1km"
            textColor="#bbbbbb"
            isRange
            v-bind:range="1000"
          ></common-button>
        </div>
      </div>
      <div class="search_detail_div">
        <div
          class="search_detail_null"
          v-if="Object.keys(this.detailData).length == 0"
        >
          <div class="search_detail_null_set">
            <img src="../../assets/icons/pin.png" />
            지도에서 원하시는<br />매물을 골라주세요!
          </div>
        </div>
        <div
          class="search_detail_not_null"
          v-else
          v-bind:detailData="getDetailData"
        >
          <div class="search_detail_header">
            <div class="search_detail_header_top">
              <div class="search_detail_header_name">
                {{ detailData.name }}
              </div>
            </div>
            <div class="search_detail_header_bottom">
              <div class="search_detail_header_address">
                {{ detailData.address }}
              </div>
              <div class="search_detail_header_builtYr">
                <div class="search_detail_header_builtYr_tag">
                  건축년도
                </div>
                {{ detailData.builtYr }}년
              </div>
            </div>
          </div>
          <div>
            <div>평균매매가 : {{ conversePrice(detailData.avgPrice) }}</div>
            <div>최고매매가 : {{ conversePrice(detailData.maxPrice) }}</div>
            <div>최저매매가 : {{ conversePrice(detailData.minPrice) }}</div>
            <div>최고크기 : {{ converseArea(detailData.maxArea) }}</div>
            <div>최소크기 : {{ converseArea(detailData.minArea) }}</div>
            <div v-for="data in detailData.data" :key="data">
              거래일자 : {{ converseYear(data.saleDate) }} / 매매가 :
              {{ conversePrice(data.price) }} / 층수 : {{ data.aptFloor }} /
              크기 :
              {{ converseArea(data.aptArea) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  predata250,
  predata500,
  predata750,
  predata1000,
} from "../../predata.js";
// import SearchDetail from "./SearchDetail.vue";
import CommonButton from "../Common/CommonButton.vue";
// import axios from "axios";
const naver = window.naver;
const kakao = window.kakao;

// 1m^2 = 0.3025평

export default {
  data() {
    return {
      isReady: false,
      cx: 0,
      cy: 0,
      name: "",
      range: this.getRange,
      mapOpacity: 0,
      resultData: [],
      detailData: {},
    };
  },
  computed: {
    getMapOpacity() {
      return this.mapOpacity;
    },
    getDetailData() {
      return this.detailData;
    },
    getDetailDataSize() {
      return this.detailData.data.price.length;
    },
    getRange() {
      return this.$store.getters.getSearchRange;
    },
  },
  methods: {
    converseYear(year) {
      var strYear = year.toString();
      var resultYear = "";
      var splitYear = strYear.split("");
      resultYear +=
        splitYear[0] +
        splitYear[1] +
        splitYear[2] +
        splitYear[3] +
        ". " +
        splitYear[4] +
        +splitYear[5] +
        ". " +
        splitYear[6] +
        splitYear[7];
      return resultYear;
    },
    converseArea(area) {
      var roundArea = Math.round(area);
      var resultArea = "";
      resultArea += roundArea + "m²";
      return resultArea;
    },
    conversePrice(price) {
      var strPrice = price.toString();
      var length = strPrice.length;
      var resultPrice = "";
      var splitPrice = strPrice.split("");
      if (length <= 4) {
        resultPrice += strPrice + "만";
      } else if (length == 5) {
        resultPrice += splitPrice[0] + "억";
        if (splitPrice[1] != 0) {
          resultPrice +=
            " " +
            splitPrice[1] +
            "," +
            splitPrice[2] +
            splitPrice[3] +
            splitPrice[4] +
            "만";
        }
      } else if (length == 6) {
        resultPrice += splitPrice[0] + splitPrice[1] + "억";
        if (splitPrice[2] != 0) {
          resultPrice +=
            " " +
            splitPrice[2] +
            "," +
            splitPrice[3] +
            splitPrice[4] +
            splitPrice[5] +
            "만";
        }
      } else if (length == 7) {
        resultPrice += splitPrice[0] + splitPrice[1] + splitPrice[2] + "억";
        if (splitPrice[3] != 0) {
          resultPrice +=
            " " +
            splitPrice[3] +
            "," +
            splitPrice[4] +
            splitPrice[5] +
            splitPrice[6] +
            "만";
        }
      }
      console.log(resultPrice);
      return resultPrice;
    },
    setDetailData(index) {
      this.detailData = this.resultData[index];
    },
    clearDetailData() {
      this.detailName = {};
    },
    setResultData(result) {
      return new Promise((resolve) => {
        this.resultData = result;
        resolve(true);
      });
    },
    setMapOpacity() {
      this.mapOpacity = 1;
    },
    getHouseList() {
      return new Promise((resolve) => {
        const queryObj = {
          cx: this.cx,
          cy: this.cy,
          name: this.name,
          housetype: this.$route.query.housetype - 0,
          searchtype: this.$route.query.searchtype - 0,
          range: this.getRange,
        };
        queryObj;
        console.log(queryObj);
        if (queryObj.range == 1000) {
          resolve(predata1000);
        } else if (queryObj.range == 750) {
          resolve(predata750);
        } else if (queryObj.range == 250) {
          resolve(predata250);
        } else {
          resolve(predata500);
        }

        // ===== axios =====
        // axios
        //   .get(
        //     "http://125.186.79.71:8080/happyhouse_spring_boot/api/search/get/" +
        //       encodeURI(queryObj.name) +
        //       "/" +
        //       queryObj.housetype +
        //       "/" +
        //       queryObj.searchtype +
        //       "/" +
        //       queryObj.range +
        //       "/" +
        //       queryObj.cx +
        //       "/" +
        //       queryObj.cy
        //   )
        //   .then(function(response) {
        //     console.log(response);
        //     resolve(response.data);
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });
      });
    },
    getGeoCoords() {
      return new Promise((resolve) => {
        var ps = new kakao.maps.services.Places();

        ps.keywordSearch(this.$route.query.term, placesSearchCB);

        function placesSearchCB(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            // console.log(data);
            const coords = {
              x: data[0].y - 0,
              y: data[0].x - 0,
              name: data[0].place_name,
            };
            resolve(coords);
          }
        }
      });
    },
    initMap(x, y, predata) {
      // console.log(x, y);
      return new Promise((resolve) => {
        var map = new naver.maps.Map(document.getElementById("map"), {
          center: new naver.maps.LatLng(x, y),
          zoom: this.getRange == 500 ? 16 : this.getRange == 250 ? 17 : 15,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.RIGHT_TOP,
          },
          scrollWheel: false,
        });

        new naver.maps.Marker({
          position: new naver.maps.LatLng(x, y),
          map: map,
        });

        new naver.maps.Circle({
          map: map,
          center: new naver.maps.LatLng(x, y),
          radius: this.getRange * 1.15,
          fillColor: "crimson",
          fillOpacity: 0.1,
        });

        predata.forEach((p, index) => {
          var ref = this;
          var contentString = [
            '<div style="position:absolute;">',
            '<div class="infowindow" style="position:absolute;width:max-content;height:20px;top:-25px;transform:translateX(-38%);background-color:rgba(0,0,0,0.5);z-index:1;margin:0;padding: 1px 6px 2px 6px; border-radius: 20px; font-size:14px">',
            '<div class="spmc btn_clear" id="pname">' + p.name + "</div>",
            "</div>",
            '<div class="pin_s" style="cursor: pointer; width: 22px; height: 30px;">',
            '<img src="https://ssl.pstatic.net/static/maps/img/icons/pin_s_default.png" alt="" style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 22px; height: 30px; left: 0px; top: 0px;">',
            "</div>",
            "</div>",
          ].join("");

          var htmlMarker = new naver.maps.Marker({
            position: new naver.maps.LatLng(p.coord_x, p.coord_y),
            map: map,
            title: p.name,
            icon: {
              content: contentString,
            },
          });

          var elHtmlMarker = htmlMarker.getElement();

          elHtmlMarker.addEventListener("click", function() {
            ref.clearDetailData();
            ref.setDetailData(index);
          });
        });
        resolve(true);
      });
    },
  },
  mounted() {
    // console.log(Object.keys(this.detailData).length);
    this.getGeoCoords().then((result) => {
      this.cx = result.x;
      this.cy = result.y;
      this.name = result.name;
      this.getHouseList().then((result) => {
        console.log("REST API 데이터 불러오기 완료!");
        this.setResultData(result).then(() => {
          console.log("REST API 데이터 저장 완료!");
          // console.log(this.resultData);
          this.initMap(this.cx, this.cy, result).then(() => {
            console.log("NAVER 맵 생성 완료!");
            this.setMapOpacity();
          });
        });
      });
    });
  },
  components: {
    // SearchDetail,
    CommonButton,
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 795px;
  /* background-color: rgba(255, 255, 255, 1); */
}
.search_map_div {
  opacity: 0;
  z-index: 0;
  width: 70%;
  height: 100%;
  transition: opacity 1.2s;
}
.search_detail_wrapper {
  opacity: 0;
  z-index: 0;
  width: 30%;
  height: 100%;
  transition: opacity 1.2s;
}
.search_range_div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  border-bottom: 2px solid #333333;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.search_range_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 60%;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.3);
}
.search_detail_div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  overflow-y: scroll;
}
.search_detail_null {
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
}
.search_detail_null_set {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.search_detail_not_null {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  color: #bbbbbb;
}
.search_detail_header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #333333;
}
.search_detail_header_top {
  display: flex;
  width: 100%;
}
.search_detail_header_bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  font-size: 14px;
}
.search_detail_header_name {
  display: flex;
  font-size: 24px;
  color: white;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.search_detail_header_address {
  display: flex;
}
.search_detail_header_builtYr_tag {
  padding: 2px 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 5px;
  color: white;
  font-weight: 500;
}
.search_detail_header_builtYr {
  display: flex;
  align-items: center;
}
</style>
