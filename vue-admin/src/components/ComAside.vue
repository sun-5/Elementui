<template>
  <el-menu
    router
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#00538a"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 无二级 -->
    <el-menu-item
      v-for="item in noChild"
      :key="item.path"
      :index="item.path + ''"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 有二级 -->
    <el-submenu
      :index="index + ''"
      v-for="(item, index) in hasChild"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subitem.path + ''"
          v-for="(subitem, subindex) in item.children"
          :key="subindex"
          >{{ subitem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    noChild() {
      return this.asideMenu.filter((item) => !item.children);
    },
    hasChild() {
      return this.asideMenu.filter((item) => item.children);
    },
  },
  data() {
    return {
      asideMenu: [
        {
          path: "/",
          label: "首页",
          icon: "s-home",
        },
        {
          path: "/video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          path: "/user",
          label: "用户管理",
          icon: "user",
        },
        {
          label: "其他",
          icon: "setting",
          children: [
            {
              path: "/page1",
              label: "页面1",
            },
            {
              path: "/page2",
              label: "页面2",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.el-menu {
  height: 100%;
}
</style>
