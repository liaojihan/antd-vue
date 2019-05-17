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
</template>