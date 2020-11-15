<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <com-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </com-form>
    </div>
    <div class="manage-content">
      <com-table></com-table>
    </div>
  </div>
</template>

<script>
import ComForm from '../../components/ComForm.vue'
import ComTable from '../../components/ComTable.vue'

export default {
  components: {
    ComForm,
    ComTable
  },
  data() {
    return {
      //父组件定义数据 传给 子组件
      searchForm: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          options: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
</style>
