<template>
  <div class="sider-body">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#304156"
      text-color="#fff"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/home" @click="navigateTo('/home')">
        <el-icon><icon-menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/user" @click="navigateTo('/user')">
        <el-icon><User /></el-icon>
        <template #title>学生管理</template>
      </el-menu-item>
      <el-menu-item index="/chengji" @click="navigateTo('/grades')">
        <el-icon><Calendar /></el-icon>
        <template #title>成绩管理</template>
      </el-menu-item>
      <el-menu-item index="/teacher" @click="navigateTo('/teacher')">
        <el-icon><Avatar /></el-icon>
        <template #title>教师管理</template>
      </el-menu-item>
      <el-sub-menu index="/system">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/index" @click="navigateTo('/system')">
          <template #title>系统管理</template>
        </el-menu-item>
        <el-menu-item index="/system/changePass" @click="navigateTo('/changePass')">
          <i class="el-icon-success" />
          <template #title>修改密码</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";


const router = useRouter();

const navigateTo = (key: string) => {
  router.push(key);
}
</script>

<style>
.sider-body {
  height: 100%;
  width: 100%;
}
.el-menu-vertical-demo {
  width: 100%;
  min-height: 100%;
}
</style>
