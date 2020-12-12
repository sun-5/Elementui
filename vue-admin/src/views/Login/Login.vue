<template>
  <div class="login">
    <el-form :label-position="labelPosition" label-width="80px" :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'top',
      form: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    this.checkLogin()
  },
  methods: {
    login() {
      this.$http.post('api/permission/getMenu', this.form).then(res => {
        res = res.data
        if (res.code === 20000) {
          this.$store.commit('clearMenu')
          this.$store.commit('setMenu', res.data.menu)
          this.$store.commit('setToken', this.$router)
          this.$store.commit('addMenu', this.$router)
          this.$router.push({ name: 'home' })
        } else {
          this.$message.warning(res.data.message)
        }
      })
    },
    checkLogin() {}
  }
}
</script>
<style lang="scss" scoped>
.login {
  padding-top: 200px;
  .el-form {
    margin: 0 auto;
    width: 600px;
    padding: 50px;
    background: rgb(248, 234, 216);
    border-radius: 20px;
    box-shadow: 0px 1px 6px 3px #ccc;
    .el-form-item {
      text-align: center;
    }
  }
}
</style>
