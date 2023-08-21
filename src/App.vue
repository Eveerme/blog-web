<template>
  <div id="app" v-loading="loadingStore.loading">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useLoadingStore } from './store/load';

const loadingStore = useLoadingStore();
</script>
<style scoped>

</style>
