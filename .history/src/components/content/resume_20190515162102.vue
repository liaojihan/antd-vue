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
          <a-collapse-panel v-for="(text, index) in texts" :header="text.title" :key="index">
            <div>
            <p>{{text.content}}</p>
            <a-icon type="edit" :style="{ float: right }"/>
            </div>
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
      texts: [
        {
          title: '213',
          content: 'gfdgfdgfdgfdgfdhgfhgfhfghfghfghfdghfdhfhfdghdfghfdghfdhfdghfgdhdfghfgdhfdghfghfgh2fdbfdhth'
        },
        {
          title: '213',
          content: 'gfdgfdgfdgfdgfdhgfhgfhfghfghfghfdghfdhfhfdghdfghfdghfdhfdghfgdhdfghfgdhfdghfghfgh2fdbfdhth'
        },
        {
          title: '213',
          content: 'gfdgfdgfdgfdgfdhgfhgfhfghfghfghfdghfdhfhfdghdfghfdghfdhfdghfgdhdfghfgdhfdghfghfgh2fdbfdhth'
        },
        {
          title: '213',
          content: 'gfdgfdgfdgfdgfdhgfhgfhfghfghfghfdghfdhfhfdghdfghfdghfdhfdghfgdhdfghfgdhfdghfghfgh2fdbfdhth'
        },
        {
          title: '213',
          content: 'gfdgfdgfdgfdgfdhgfhgfhfghfghfghfdghfdhfhfdghdfghfdghfdhfdghfgdhdfghfgdhfdghfghfgh2fdbfdhth'
        }
      ],
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
      this.$store.dispatch(RESUME_STATUS, {
        ...item,
        index
      })
    }
  }
};
</script>

<style>
#resume-collapse {
  margin-top: 40px;
}
</style>
