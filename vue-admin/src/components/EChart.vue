<!--  -->
<template>
  <div class="" style="height:100%" ref="myechart">
    echart
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import echarts from 'echarts'

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    chartData: {
      //父组件传值
      type: Object,
      default() {
        //默认值
        return {
          xData: [],
          series: []
        }
      }
    },
    //是否坐标轴图表
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      myechart: null,
      axisOption: {
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '10%'
        },
        tooltip: {
          trigger: 'axis'
        },
        //有坐标轴的配置
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333'
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            }
          }
        ],
        series: []
      },
      normalOption: {
        //无坐标轴的配置  如饼图
        series: []
      }
    }
  },
  //监听属性 类似于data概念
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },

  watch: {
    //监听数据变化时初始化图表
    chartData: {
      handler: function() {
        this.initChart()
        console.log('监听到chartData变化 初始化图表')
      },
      deep: true
    },
    isCollapse() {
      //导航菜单折叠后，表格重新渲染尺寸
      setTimeout(() => {
        this.resizeChart()
      }, 300)
    }
  },
  methods: {
    initChart() {
      console.log(' 初始化图表')
      this.initChartData() //数据初始化
      //初始化图表
      if (this.myechart) {
        this.myechart.setOption(this.options, true)
      } else {
        this.myechart = echarts.init(this.$refs.myechart)
        this.myechart.setOption(this.options, true)
      }
    },
    initChartData() {
      console.log(' 初始化数据')
      //图表数据处理
      if (this.isAxisChart) {
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        this.normalOption.series = this.chartData.series
      }
    },
    resizeChart() {
      this.myechart ? this.myechart.resize() : ''
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChart)
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
