<template>
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <!-- <div class="logo" /> -->
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[code]" @select="select">
        <a-menu-item key="1">
          <a-icon type="bars" />
          <span class="nav-text">用户管理</span>
          <router-link to="/user"></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">信息</span>
          <router-link to="/list"></router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">button</span>
          <router-link to="/chart"></router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">resume</span>
          <router-link to="/resume"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import { mapState, mapActions } from "vuex"
import { MENU_STATUS } from '../../store/mutation_type/menu'
export default {
    name: 'navTemplate',
    computed: {
      ...mapState({
        code: state => state.menu.code.toString()
      })
    },
    methods:{
      select({ item, key, selectKeys}){
        this.$store.dispatch(MENU_STATUS, {
          code: key
        })
      }
    }
}
</script>
