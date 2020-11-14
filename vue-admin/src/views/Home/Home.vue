<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8">
      <el-card shadow="hover" style="height:290px">
        <div class="user">
          <img :src="userImg" alt="" />
          <div class="userInfo">
            <p class="name">Lang</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="loginInfo">
          <p>上次登录时间：<span>2019-12-20</span></p>
          <p>上次登录地点：<span>南京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="height:522px;margin-top:20px">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :prop="key" :key="key" :label="val"> </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="(item, index) in countData" :key="index" :body-style="{ display: 'flex', padding: 0 }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <p class="num">￥ {{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <echart style="height:280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height:260px"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height:260px"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Echart from '../../components/EChart'
export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [],
      echartData: {
        order: {
          //折线图数据
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      },
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: '1234',
          icon: 'star-on',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: '641',
          icon: 'video-camera-solid',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: '12634',
          icon: 'message-solid',
          color: '#5ab1ef'
        },
        {
          name: '今日支付订单',
          value: '1234',
          icon: 'star-on',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: '641',
          icon: 'video-camera-solid',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: '12634',
          icon: 'message-solid',
          color: '#5ab1ef'
        }
      ]
    }
  },
  methods: {
    getTableData() {
      this.$http('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
        const order = res.data.orderData //折线图数据
        this.echartData.order.xData = order.date
        //第一步取出series中的name部分 键名
        let keyArray = Object.keys(order.data[0])
        console.log(keyArray)
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key,
            data: order.data.map(item => item[key]),
            type: 'line'
          })
        })
        console.log(this.echartData.order.series)
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
