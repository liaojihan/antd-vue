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
          <a-collapse-panel header="个人信息" key="1" :personalInformation="personalInformation">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" 
            title="编辑" @click="informationHandler(personalInformation)"/>
          </a-collapse-panel>
          <a-collapse-panel header="个人优势" key="2">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="编辑"/>
          </a-collapse-panel>
          <a-collapse-panel header="期望职位" key="3">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="编辑"/>
          </a-collapse-panel>
          <a-collapse-panel header="工作经历" key="4">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="编辑"/>
            <a-icon type="delete" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="删除"/>
          </a-collapse-panel>
          <a-collapse-panel header="项目经历" key="5">
            <a-icon type="edit" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="编辑"/>
            <a-icon type="delete" :style="{ float: 'right', color: '#1890FF', fontSize: '20px', cursor: 'pointer'}" title="删除"/>
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
      console.log(this)
    }
  },
   beforeCreate: function () {
                console.group('beforeCreate 创建前状态===============》');
               console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
               console.log("%c%s", "color:red","message: " + this.message)  
        },
        created: function () {
            console.group('created 创建完毕状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //undefined
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化
        },
        beforeMount: function () {
            console.group('beforeMount 挂载前状态===============》');
            console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
        },
        mounted: function () {
            console.group('mounted 挂载结束状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
               console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
        },
        beforeUpdate: function () {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);   
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        updated: function () {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el); 
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        beforeDestroy: function () {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);    
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message); 
        },
        destroyed: function () {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red","el     : " + this.$el);
            console.log(this.$el);  
               console.log("%c%s", "color:red","data   : " + this.$data); 
               console.log("%c%s", "color:red","message: " + this.message)
        }
};
</script>

<style>
#resume-collapse {
  margin-top: 40px;
}
</style>
