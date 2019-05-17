<template>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0, fontS }" >123</a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        vue component @ create by LiaoJH
      </a-layout-footer>
    </a-layout>
</template>

<script>
export default {
    name: 'contentTemplate'
}
</script>

