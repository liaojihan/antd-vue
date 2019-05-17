<template>
 <div>
    <a-layout-header
      :style="{ background: '#fff', padding: 0, fontSize: '20px', textAlign: 'center' }"
    >{{ title }}</a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      </div>
    </a-layout-content></div>
<div>
  
  </div>
</template>

<script>
export default {
    name: 'resumeTemplate',
    data () {
      return {
        text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      }
    }
}
</script>

<style>
    #resume-collapse{
        margin-top: 40px
    }
</style>
