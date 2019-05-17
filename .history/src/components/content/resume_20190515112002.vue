<template>
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
   <div>
    <a-collapse defaultActiveKey="1" :bordered="false">
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
</template>

<script>
export default {
    name: 'resumeTemplate'
}
</script>