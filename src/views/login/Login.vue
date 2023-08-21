<template>
  <div class="login-wrap">
      <div class="ms-login">
          <div class="ms-title">管理系统</div>
          <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0px" class="ms-content">
              <el-form-item prop="useraccount">
                  <el-input v-model="ruleForm.useraccount" placeholder="useraccount">
                      <template #prepend>
                        <el-icon><User /></el-icon>
                      </template>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" placeholder="password" v-model="ruleForm.password">
                      <template #prepend>
                        <el-icon><Lock /></el-icon>
                      </template>s
                  </el-input>
              </el-form-item>
              <el-form-item class="login-btn">
                <el-button type="primary" @click="onSubmit(ruleFormRef)">登录</el-button>
                <el-button @click="reset()">重置</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from "vue";
import type { FormInstance } from 'element-plus';
import { login } from "@/api/login/login";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/userStore";

const router = useRouter();
const userStore = useUserStore();

const ruleForm = reactive({
    useraccount: "",
    password: "",
});

const rules = {
  useraccount: [{
        required: true,
        message: "请输入用户名",
        trigger: "blur",
    }],
    password: [{
        required: true,
        message: "请输入密码",
        trigger: "blur"
    }],
}; 

const ruleFormRef = ref<FormInstance>();

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      console.log(ruleForm);
      login(ruleForm).then((res: any)=>{
        console.log(res);
        if (res.code == 200){
          userStore.addToken(res.data.token);
          userStore.addUserInfo(res.data.user);
          ElNotification({
            title: '登录成功',
            message: '欢迎回来',
            type: 'success',
          })
          router.push({
            path: "/index"
          })
        }
        else{
          ElNotification({
            title: '登录失败',
            message: '请重新登录',
            type: 'error',
          })
        }

      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const reset = ()=>{
  console.log(ElNotification);
  ElNotification({
    title: '登录成功',
    message: '欢迎回来',
    type: 'success',
  })
}

</script>

<style scoped>
.login-wrap {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/login-bg.jpg");
  background-size: 100% 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  margin-left: 0px;
}

</style>