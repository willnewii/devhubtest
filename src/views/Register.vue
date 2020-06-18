<template>
  <div class="login">
    <div class="form">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem v-if="status === 0" prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem v-if="status === 0" prop="email">
          <Input type="email" v-model="formInline.email" placeholder="邮箱">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem v-if="status === 1" prop="code">
          <Input type="text" v-model="formInline.code" placeholder="验证码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" :loading="loading" @click="handleSubmit('formInline')">{{
            status === 0 ? "注册" : "验证"
          }}</Button>
        </FormItem>
        <FormItem class="last-item">
          <span>已有账号?<a href="#/login">登录</a></span>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
// @ is an alias to /src

export default {
  name: "Register",
  components: {},
  data() {
    return {
      status: 0,
      loading: false,
      formInline: {
        user: "",
        password: "",
        email: "",
        code: "",
      },
      ruleInline: {
        user: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码.", trigger: "blur" },
          { type: "string", min: 8, message: "密码长度最少8位", trigger: "blur" },
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    async SignIn() {
      this.loading = true;
      try {
        const user = await Auth.signUp({
          username: this.formInline.user,
          password: this.formInline.password,
          attributes: {
            email: this.formInline.email,
          },
        });
        if (user) {
          this.status = 1;
          this.$Message.info("验证码已发送,请查看邮箱");
        }
      } catch (error) {
        this.$Message.error(error.message);
        console.log("error signing in", error);
      } finally {
        this.loading = false;
      }
    },
    async confirmSignUp() {
      this.loading = true;
      try {
        let data = await Auth.confirmSignUp(this.formInline.user, this.formInline.code);
        console.log(data);

        this.$Message.info("注册成功");
        this.$router.push({ name: "Login" });
      } catch (error) {
        this.$Message.error(error.message);
        console.log("error signing in", error);
      } finally {
        this.loading = false;
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          switch (this.status) {
            case 0:
              this.SignIn();
              break;
            case 1:
              this.confirmSignUp();
              break;
          }
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
