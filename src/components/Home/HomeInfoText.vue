<template>
  <div class="wrapper">
    <div class="title_text">{{ titleText }}</div>
    <div class="content_text">{{ contentText }}</div>
  </div>
</template>

<script>
export default {
  props: { titleText: String, contentText: String },
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
