<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">新增</el-button>
      <com-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </com-form>
    </div>
    <div class="manage-content">
      <com-table :tableData="tableData" :tableLabel="tableLabel" :config="config"></com-table>
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
      config: {
        page: 1,
        total: 30,
        loading: false
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期'
        },
        {
          prop: 'addr',
          label: '地址'
        }
      ],
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
  },
  methods: {
    getList() {
      this.config.loading = true
      this.$http
        .get('/api/user/getUser', {
          params: {
            page: this.config.page
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.data.count
          this.config.loading = false
        })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
</style>
