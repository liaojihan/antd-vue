<template>
  <div>
    <a-layout-header
      :style="{ background: '#fff', padding: 0, fontSize: '20px', textAlign: 'center' }"
    >{{ title }}</a-layout-header>
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <a-steps>
          <a-step v-for="(item, index) in items" :key="index" :status="item.status" :title="item.title">
            <a-icon :type="item.type" slot="icon" :style="{ cursor: 'pointer' }" @click="changeStatus(item, index)"/>
          </a-step>
        </a-steps>

        <a-collapse defaultActiveKey="1" :bordered="false" id="resume-collapse">
          <a-collapse-panel header="This is panel header 1" key="1">
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 2" key="2" :disabled="false">
            <p>{{text}}</p>
          </a-collapse-panel>
          <a-collapse-panel header="This is panel header 3" key="3">
            <p>{{text}}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "resumeTemplate",
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
      ,
      title: ''
    };
  },
  created(){
    this.title = this.$attrs.title
  },
  computed: {
    ...mapState({
      items: state => state.resume.status
    })
  },
  methods:{
    changeStatus: function(item, index){
      this.
    }
  }
};
</script>

<style>
#resume-collapse {
  margin-top: 40px;
}
</style>
