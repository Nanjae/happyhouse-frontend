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
      <div
        class="search_range_div"
        v-bind:style="{ borderBottomColor: getBorderColor }"
      >
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
            <div class="convert_box">
              {{ getRouterName
              }}<img class="arrow_img" src="../../assets/icons/arrow.png" />{{
                getName
              }}
            </div>
            <img class="pin_img" src="../../assets/icons/pin.png" />
            지도에서 원하시는<br />매물을 골라주세요!
          </div>
        </div>
        <div
          class="search_detail_not_null"
          v-else
          v-bind:detailData="getDetailData"
        >
          <div
            class="search_detail_header"
            v-bind:style="{ borderBottomColor: getBorderColor }"
          >
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
          <div
            class="search_detail_data"
            v-bind:style="{ borderBottomColor: getBorderColor }"
          >
            <div class="search_detail_data_price">
              <div class="search_detail_data_price_left">
                <div class="search_detail_data_price_tag">
                  평균매매가
                </div>
                <div class="search_detail_data_price_avg">
                  {{ conversePrice(detailData.avgPrice) }}
                </div>
              </div>
              <div class="search_detail_data_price_right">
                <div class="search_detail_data_price_tag">
                  시세범위
                </div>
                <div class="search_detail_data_price_min_max">
                  {{ conversePrice(detailData.minPrice) }}
                  ~
                  {{ conversePrice(detailData.maxPrice) }}
                </div>
              </div>
            </div>
            <div class="search_detail_data_area">
              <div class="search_detail_data_price_left">
                <div class="search_detail_data_price_tag">
                  최저크기
                </div>
                <div class="search_detail_data_area_min_max">
                  {{ converseArea(detailData.minArea) }}
                </div>
              </div>
              <div class="search_detail_data_price_right">
                <div class="search_detail_data_price_tag">
                  최고크기
                </div>
                <div class="search_detail_data_area_min_max">
                  {{ converseArea(detailData.maxArea) }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="search_chart_div"
            v-bind:style="{ borderBottomColor: getBorderColor }"
          >
            <div id="linechart_material" style="width:100%; height:100%"></div>
          </div>
          <div
            class="direction_div"
            v-bind:style="{ borderBottomColor: getBorderColor }"
          >
            <div class="direction_title">이동시간 구하기</div>
            <div class="direction_box">
              <div class="direction_tag">
                목적지
              </div>
              <input v-model="directionPlace" class="direction_waypoint" />
              <div class="direction_button" v-on:click="getDirection">
                <img class="direction_img" src="../../assets/icons/car.png" />
                검색
              </div>
              <div v-if="getDirectionTime != 0" class="direction_result">
                <img class="direction_img" src="../../assets/icons/timer.png" />
                {{ getDirectionTime }}분
              </div>
            </div>
          </div>
          <div
            class="search_detail_list"
            v-bind:style="{ borderBottomColor: getBorderColor }"
          >
            <div class="search_detail_list_title">거래 기록</div>
            <div class="search_detail_list_tag">
              <div class="search_detail_list_tag_date isTag">거래일</div>
              <div class="search_detail_list_tag_price isTag">가격</div>
              <div class="search_detail_list_tag_area isTag">크기</div>
              <div class="search_detail_list_tag_floor isTag">층수</div>
            </div>
            <div v-for="data in detailData.data" :key="data.index">
              <div
                class="search_detail_list_item"
                v-bind:style="{ borderBottomColor: getBorderColor }"
              >
                <div class="search_detail_list_tag_date isItem">
                  {{ converseYear(data.saleDate) }}
                </div>
                <div class="search_detail_list_tag_price isItem">
                  매매 {{ conversePrice(data.price) }}
                </div>
                <div class="search_detail_list_tag_area isItem">
                  {{ converseArea(data.aptArea) }}
                </div>
                <div class="search_detail_list_tag_floor isItem">
                  {{ data.aptFloor }}층
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   predata250,
//   predata500,
//   predata750,
//   predata1000,
// } from "../../predata.js";
// import SearchDetail from "./SearchDetail.vue";
import CommonButton from "../Common/CommonButton.vue";
import axios from "axios";
const naver = window.naver;
const kakao = window.kakao;
const google = window.google;

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
      directionTime: 0,
      directionPlace: "",
      routerName: this.$route.query.term,
    };
  },
  computed: {
    getBorderColor() {
      return this.$store.getters.getSearchTypeOption == "1"
        ? "#333333"
        : "#1364c0";
    },
    getDirectionTime() {
      return this.directionTime;
    },
    getMapOpacity() {
      return this.mapOpacity;
    },
    getDetailData() {
      return this.detailData;
    },
    getDetailDataSize() {
      return this.detailData.data.length;
    },
    getRange() {
      return this.$store.getters.getSearchRange;
    },
    getName() {
      return this.name;
    },
    getRouterName() {
      return this.routerName;
    },
  },
  methods: {
    getDirection() {
      // var geocoder = new kakao.maps.services.Geocoder();

      // var callback = function(result, status) {
      //   if (status === kakao.maps.services.Status.OK) {
      //     console.log(result);
      //   }
      // };

      // geocoder.addressSearch("올림픽로 240", callback);
      const ref = this;
      let goalx = 0;
      let goaly = 0;

      this.getGeoAddress(this.directionPlace).then((result) => {
        // console.log(result);
        goalx = result[0].y;
        goaly = result[0].x;
        const url =
          "http://125.186.79.71:8080/happyhouse_spring_boot/api/direction?start=" +
          this.detailData.coord_y +
          "," +
          this.detailData.coord_x +
          "&goal=" +
          goaly +
          "," +
          goalx +
          "&cid=" +
          process.env.VUE_APP_NAVER_MAP_CID +
          "&key=" +
          process.env.VUE_APP_NAVER_MAP_SECRET;
        axios
          .get(url)
          .then(function(response) {
            const resDuration =
              response.data.route.traoptimal[0].summary.duration;
            console.log(resDuration);
            ref.directionTime = Math.round(resDuration / 60000);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    },
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
      return resultPrice;
    },
    setDetailData(index) {
      this.detailData = this.resultData[index];
      var forData = JSON.parse(JSON.stringify(this.detailData.data));
      // console.log(forData);

      google.charts.load("current", { packages: ["line"] });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "year");
        data.addColumn("number", "매매가격");

        var dataSet = [];
        for (var i = 0; i < forData.length; i++) {
          dataSet.push([forData[i].saleDate.toString(), forData[i].price]);
        }
        dataSet.sort((a, b) => {
          return a[0] - b[0];
        });

        // console.log(dataSet);

        data.addRows(dataSet);
        var options = {
          animation: { startup: true, easing: "out", duration: 1000 },
          backgroundColor: { fill: "transparent" },
          chartArea: { backgroundColor: "transparent" },
          legend: { position: "none" },
          title: "매매가 변동 차트",
          titleTextStyle: { color: "white" },
          hAxis: { title: "", format: "currency" },
          vAxis: { title: "" },
        };
        var chart = new google.charts.Line(
          document.getElementById("linechart_material")
        );

        chart.draw(data, google.charts.Line.convertOptions(options));
      }
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
        // console.log(queryObj);
        // if (queryObj.range == 1000) {
        //   resolve(predata1000);
        // } else if (queryObj.range == 750) {
        //   resolve(predata750);
        // } else if (queryObj.range == 250) {
        //   resolve(predata250);
        // } else {
        //   resolve(predata500);
        // }

        // ===== axios =====
        axios
          .get(
            "http://125.186.79.71:8080/happyhouse_spring_boot/api/search/get/" +
              encodeURI(queryObj.name) +
              "/" +
              queryObj.housetype +
              "/" +
              queryObj.searchtype +
              "/" +
              queryObj.range +
              "/" +
              queryObj.cx +
              "/" +
              queryObj.cy
          )
          .then(function(response) {
            console.log(response);
            resolve(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    },
    getGeoAddress(place) {
      return new Promise((resolve) => {
        var ps = new kakao.maps.services.Places();

        ps.keywordSearch(place, placesSearchCB);

        function placesSearchCB(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            resolve(data);
          }
        }
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
            // console.log(data);
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
            ref.directionTime = 0;
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
  border-bottom: 2px solid;
  transition: border-color 0.4s;
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
  align-items: flex-start;
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
  align-items: center;
  margin-bottom: 20px;
}
.search_detail_not_null {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 10px 30px;
  color: #bbbbbb;
}
.search_detail_header {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  transition: border-color 0.4s;
  border-bottom: 2px solid;
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
.search_detail_data {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid;
  transition: border-color 0.4s;
}
.search_detail_data_price_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  font-size: 20px;
}
.search_detail_data_price_right {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  font-size: 20px;
}
.search_detail_data_price {
  color: #fa880b;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
}
.search_detail_data_area {
  color: #fa880b;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
  margin-top: 10px;
}
.search_detail_data_price_avg {
  color: #ddeec7;
  font-weight: 500;
}
.search_detail_data_price_tag {
  padding: 2px 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 5px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}
.search_detail_data_price_min_max {
  font-weight: 500;
  display: flex;
  justify-content: center;
}
.search_detail_data_area_min_max {
  color: rgb(127, 202, 127);
  font-weight: 500;
  display: flex;
  justify-content: center;
}
.search_detail_list {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #cccccc;
  font-weight: 300;
  border-bottom: 2px solid;
  transition: border-color 0.4s;
}
.search_detail_list_tag {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.search_detail_list_item {
  display: flex;
  width: 100%;
  padding: 4px 0px;
  border-bottom: 1px solid;
  transition: border-color 0.4s;
}
.search_detail_list_tag_date {
  width: 25%;
}
.search_detail_list_tag_price {
  width: 35%;
}
.search_detail_list_tag_area {
  width: 24%;
}
.search_detail_list_tag_floor {
  width: 16%;
}
.isTag {
  padding: 2px 10px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
  margin-right: 5px;
}
.isItem {
  padding-left: 6px;
}
.search_chart_div {
  width: 100%;
  height: 310px;
  margin: 10px 0px;
  padding: 10px 0px;
  border-bottom: 2px solid;
  transition: border-color 0.4s;
}
.direction_div {
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  width: 100%;
  border-bottom: 2px solid;
  transition: border-color 0.4s;
}
.direction_title {
  font-size: 16px;
  color: white;
  font-weight: 300;
}
.direction_box {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 28px;
}
.direction_waypoint {
  padding: 5px;
  background-color: transparent;
  border: 0px;
  color: white;
  border-bottom: 1px solid #bbbbbb;
  margin-right: 10px;
  width: 160px;
  font-size: 14px;
}
.direction_waypoint:focus {
  outline: none;
}
.direction_tag {
  padding: 2px 10px;
  display: flex;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 5px;
  color: white;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
.direction_button {
  padding: 4px 20px;
  padding-top: 3px;
  font-size: 24px;
  display: flex;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  margin-right: 5px;
  color: #fa880b;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
}
.direction_img {
  margin-top: 3px;
  width: 28px;
  margin-right: 10px;
}
.direction_result {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;
}
.search_detail_list_title {
  font-size: 16px;
  color: white;
  font-weight: 300;
  margin-bottom: 15px;
}
.convert_box {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.arrow_img {
  width: 22px;
  margin: 0px 10px;
  margin-top: 3px;
}
.pin_img {
  width: 240px;
}
</style>
