<template>
  <div>
    <div class="common_menu_logo">
      <img
        class="common_menu_logo_img"
        src="../../assets/demologo.png"
      />임시로고
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.common_menu_logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 40px;
  margin-right: 20px;
  /* border: 2px solid #d38fff; */
  border-radius: 12px;
  color: #d38fff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
.common_menu_logo_img {
  width: 20px;
  margin-right: 6px;
}
</style>
