<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo" background-color="#696969" text-color="#fff" active-text-color="#ffd04b">
    <!-- 无二级 -->
    <el-menu-item v-for="item in noChild" :key="item.path" :index="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 有二级 -->
    <el-submenu :index="item.label" v-for="(item, index) in hasChild" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="clickMenu(subitem)" :index="subitem.path" v-for="(subitem, subindex) in item.children" :key="subindex">{{
          subitem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    noChild() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChild() {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  data() {
    return {
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          label: '视频管理',
          name: 'video',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他',
          icon: 'setting',
          name: 'other',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
