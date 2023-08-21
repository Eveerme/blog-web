<template>
  <div>
    <div class="common-layout">
      <div class="layout-left">
        <Sider />
      </div>
      <div class="layout-right">
        <div class="layout-header">
          <Header />
        </div>
        <div class="layout-content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import Sider from './sider/sider.vue';
import Header from './header/header.vue';

</script>

<style scoped>
.common-layout{
  width:100%;
  height: 100vh;
  display: flex;
}

.layout-left{
  height: 100%;
  width: 16%;
}

.layout-right{
  height: 100%;
  width: 100%;
}
.layout-header{
  width: 100%;
  height: 10vh;
}
.layout-content{
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  background-color: #f5f5f5;
}

</style>
