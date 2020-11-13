<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        鼠标悬浮时显示
      </el-card>
      <el-card shadow="hover" style="height:522px;margin-top:20px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :prop="key" :key="key" :label="val"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon"></i>
          <div class="detail">
            <p class="num">￥ 1234</p>
            <p class="txt">今日支付订单</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height:280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover" style="height:260px"> </el-card>
        <el-card shadow="hover" style="height:260px">
          鼠标悬浮时显示
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      }
    }
  },
  methods: {
    getTableData() {
      this.$http('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        console.log(this.tableData)
      })
    }
  },
  mounted() {
    this.$http('/home/getData').then(res => {
      console.log(res.data)
    })
  },
  created() {
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/home.scss';
</style>
