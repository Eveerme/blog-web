<template>
  <div class="header">
    <div class="title">
      <span class="user-operation">管理系统</span>
    </div>
    <div class="body">
      <span style="margin-right: 8px;">{{ userName }}</span>
      <el-dropdown @command="handleCommand">
        <el-avatar shape="square" :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="clickUserInfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { logout } from "@/api/login/login"
import { useUserStore } from "@/store/userStore";
import { useRouter } from "vue-router";
import { ElNotification } from 'element-plus';

const userStore = useUserStore();
const router = useRouter();

const userName = userStore.userInfo.nickName;

// 处理头像下拉菜单点击事件
const handleCommand = (command: string ) => {
  if(command == 'clickUserInfo'){
    console.log("clickUserInfo")
  } else if(command == 'logout'){
    onLogout();
  }
}

//退出登录
const onLogout = () => {
  logout().then((_res)=>{
    userStore.removeToken();
    userStore.removeUserInfo();
    ElNotification({
      title: '退出登录成功',
      type: 'success',
    })
    router.push({
      path: '/login'
    })
  })
}

</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  height: 95%;
  box-shadow: 0px 1px 6px 1px #f2f3f4;
  padding-top: 5px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>