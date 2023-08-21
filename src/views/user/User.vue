<template>
  <div class="content">
    <div class="header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="学号">
        <el-input v-model="formInline.user" placeholder="请输入学号" clearable />
      </el-form-item>      
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入学号" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    </div>    
    <div class="body">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="创建时间" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="num" label="学号" width="180" />
        <el-table-column prop="sex" label="性别" width="100" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </div>    
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const onReset = () => {
  console.log('reset!')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
.content{
  background-color: #f5f5f5;
}
.header{
  height: 20%;
  margin: 1%;
}
.demo-form-inline .el-input {
  --el-input-width: 220px;
}
.body{
  background-color: aqua;
  margin: 1%;
}
</style>