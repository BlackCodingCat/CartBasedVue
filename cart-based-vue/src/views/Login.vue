<template>
  <div class="login-container">
    <img class="banner" src="../assets/images/panda.jpg" alt="" />
    <div class="login-box">
      <cube-form
        :model="model"
        :schema="schema"
        @submit.prevent="handleLogin"
        @validate="handleValidate"
      >
      </cube-form>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      model: {
        username: "",
        pwd: ""
      },

      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "pwd",
            label: "密码",
            props: {
			  type: "password",
              placeholder: "请输入密码",
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: "blur",
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
	  ...mapActions(['login']),

	  handleLogin(e){
		  // 阻止表单默认提交行为
		  e.preventDefault();
		  //   请求登录
          this.login(this.model).then(code => {
			if(code === 1){
				// 登录成功, 控制跳转
				const redirect_path = this.$route.query.redirect || '/';
				this.$router.push({path: redirect_path});
			}
		  }) .catch(error => {
			// 有错误发生或者登录失败
			const toast = this.$createToast({
				time: 2000,
				txt: error.message || error.response.data.message || "登录失败",
				type: "error"
			});
			toast.show();
		  });  
	  },

	  handleValidate(ret){
		  console.log(ret);	  
	  }
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  padding: 0 20px;

  .banner {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
