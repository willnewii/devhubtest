<template>
  <div class="login">
    <div class="form">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
        <FormItem class="last-item">
          <span>已有账号?<a href="#/register">注册</a></span>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码.", trigger: "blur" },
          { type: "string", min: 8, message: "密码长度最少8位", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    
  },
  methods: {
    async SignIn() {
      try {
        const user = await Auth.signIn({
          username: this.formInline.user,
          password: this.formInline.password
        });
        
        if (user) {
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.log("error signing in", error);
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        console.log(valid);
        if (valid) {
          this.SignIn();
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.form {
  width: 30vw;
  margin-bottom: 100px;
  border: 1px #ccc solid;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
  .last-item {
    margin-bottom: 0;
  }
}
</style>
