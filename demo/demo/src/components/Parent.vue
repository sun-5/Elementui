 <template>
  <div>
    <h1>父组件</h1>
    <m-child @click="get" v-on="$listeners"></m-child>
  </div>
</template>
 
 <script>
import MChild from "./Child.vue";
export default {
  components: {
    MChild,
  },
  methods: {
    get() {
      console.log("父组件");
    },
    getTask() {
      this.$http.get("/api/getTask?pageNum=1&pageSize=10").then(
        (res) => {
          console.log("------vue-resource请求到的数据-------");
          console.log(res.body);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    axiosTask() {
      this.$axios.get('/api/getTask?pageNum=1&pageSize=10')
        .then((res) => {
           console.log("------Axios请求到的数据-------");
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // console.log(this.$listeners);
    this.getTask();
    this.axiosTask();
  },
};
</script>
 
 <style>
h1 {
  width: 100%;
  height: 200px;
  background: yellowgreen;
}
</style>