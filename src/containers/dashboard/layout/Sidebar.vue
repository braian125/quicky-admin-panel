<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#075e54"
    text-color="#fff"
    active-text-color="#ffffff"
    :collapse="isCollapse"
  >
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">Navigator Two</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">Careers</span>
      </template>
      <el-menu-item index="1-3">
        <router-link to="/careers/new">Create new career</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script lang="ts">
import Vue from "vue";

export default class Sidebar extends Vue {
  private isCollapse = true;
}
</script>
