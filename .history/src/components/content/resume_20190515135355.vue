<template>
 <div>
    <a-layout-header
      :style="{ background: '#fff', padding: 0, fontSize: '20px', textAlign: 'center' }"
    >{{ title }}</a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <a-steps>
    <a-step status="finish" title="Login">
      <a-icon type="user" slot="icon"/>
    </a-step>
    <a-step status="finish" title="Verification">
      <a-icon type="solution" slot="icon"/>
    </a-step>
    <a-step status="process" title="Pay">
      <a-icon type="loading" slot="icon"/>
    </a-step>
    <a-step status="wait" title="Done">
      <a-icon type="smile-o" slot="icon"/>
    </a-step>
  </a-steps>
   
    <a-collapse defaultActiveKey="1" :bordered="false" id="resume-collapse">
      <a-collapse-panel header="This is panel header 1" key="1">
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 2" key="2" :disabled='false'>
        <p>{{text}}</p>
      </a-collapse-panel>
      <a-collapse-panel header="This is panel header 3" key="3">
        <p>{{text}}</p>
      </a-collapse-panel>
    </a-collapse>
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
