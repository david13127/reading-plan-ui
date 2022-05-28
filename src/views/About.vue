<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-steps :active="5" align-center  >
      <el-step title="IR" icon="el-icon-edit"></el-step>
      <el-step title="FRA" status="success"></el-step>
      <el-step title="FeR" icon="el-icon-edit"></el-step>
      <el-step title="FuD" status="success"></el-step>
      <el-step title="AR" icon="el-icon-picture"></el-step>
    </el-steps>
    <div>
    <el-row :gutter="18" style="width: 100%;">
      <el-col :span="3" style="margin-left: 23%">
        <el-card style="width: 200px; height: 200px;"></el-card>
      </el-col>
      <el-col :span="3" style="margin-left: 28%">
        <el-card style="width: 200px; height: 200px;"></el-card>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
