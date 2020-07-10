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
          <Button type="primary" @click="handleSubmit('formInline')" :loading="loading">登录</Button>
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
import Vue from "vue";
// @ is an alias to /src

export default {
  name: "Login",
  components: {},
  data() {
    return {
      loading: false,
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
  created() {},
  methods: {
    async SignIn() {
      this.loading = true;
      try {
        const user = await Auth.signIn({
          username: this.formInline.user,
          password: this.formInline.password,
        });

        if (user) {
          this.$Message.success("登录成功");
          Vue.prototype.$user = user;
          this.$router.push({ name: "Home" });
        }
      } catch (error) {
        this.$Message.error(error.message);
      }
      this.loading = false;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.SignIn();
        } else {
          this.$Message.error("请检查表单~");
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
