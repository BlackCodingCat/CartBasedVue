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
	  handleLogin(e){
		  // 阻止表单默认提交行为
		  e.preventDefault();
		  // 请求登录
		  
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
