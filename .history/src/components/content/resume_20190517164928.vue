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
    
        <a-collapse :bordered="false" id="resume-collapse">
          <a-collapse-panel header="个人信息" key="1">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑" @click="informationHandler(personalInformation)"/>
          </a-collapse-panel>
          <a-collapse-panel header="个人优势" key="2">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑"/>
          </a-collapse-panel>
          <a-collapse-panel header="期望职位" key="3">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑"/>
          </a-collapse-panel>
          <a-collapse-panel header="工作经历" key="4">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑"/>
            <a-icon type="delete" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="删除"/>
          </a-collapse-panel>
          <a-collapse-panel header="项目经历" key="5">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑"/>
            <a-icon type="delete" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="删除"/>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </a-layout-content>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { RESUME_STATUS } from '../../store/mutation_type/resume'

export default {
  name: "resumeTemplate",
  data() {
    return {
      title: '',
      personalInformation: {
        name: 'xxx',
        experience: 1,
        status: '在职-积极找工作',
        phone: '',
        wechat: '',
        email: ''
      },
      personalAdvantage: {
        content: ''
      },
      desiredPosition: { // 期望职位
        name: '', // name
        salary: '', // 薪资
        industry: '', // 行业
        place: '' // 地点
      },
      workExperience: { //工作经历
        corporateName: '', // 公司名称
        industry: '', //所属行业
        department: '', // 部门 
        position: '', // 职位
        type: '', // 职位类型
        workingTime: '', // 工作起始
        workContent: '' // 工作内容
      }
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
      this.$store.dispatch(RESUME_STATUS, {
        ...item,
        index
      })
    },
    informationHandler(){

    }
  }
};
</script>

<style>
#resume-collapse {
  margin-top: 40px;
}
</style>
