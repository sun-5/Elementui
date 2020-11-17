<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sync="dialogTableVisible">
      <el-table :data="tableData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">新增</el-button>
      <com-form inline :formLabel="formLabel" :form="searchForm">
        <el-button type="primary">搜索</el-button>
      </com-form>
    </div>
    <com-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList"></com-table>
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
      operateType: 'add',
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      opreateFormLabel: [
        {
          model: 'name',
          label: '姓名'
        },
        {
          model: 'age',
          label: '年龄'
        },
        {
          model: 'sex',
          label: '性别',
          opts: ''
        },
        {
          model: 'birth',
          label: '出生日期'
        },
        {
          model: 'addr',
          label: '地址'
        }
      ],
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
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
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
    },
    changePage(val) {
      console.log(val)
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
