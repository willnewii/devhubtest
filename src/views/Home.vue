<template>
  <div class="home">
    <Menu active-name="3-1" :open-names="['3']" @on-select="select">
      <Submenu name="1">
        <template slot="title">
          My Profile
        </template>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          Address Book
        </template>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          Booking History
        </template>
        <MenuItem name="3-1">Upcoming</MenuItem>
        <MenuItem name="3-2">Completed</MenuItem>
        <MenuItem name="3-3">Canceled</MenuItem>
      </Submenu>
      <MenuItem name="4">Payments Details</MenuItem>
      <MenuItem name="5">Update Password</MenuItem>
      <MenuItem name="6">Log out</MenuItem>
    </Menu>
    <div class="content">
      <div class="title">Completed Bookings</div>
      <div>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import Card from "../components/Card";
import Vue from "vue";
// @ is an alias to /src
export default {
  name: "Home",
  components: { Card },
  methods: {
    select(name) {
      if (name === "6") {
        this.$Modal.confirm({
          title: "退出",
          content: "确认要退出当前账号？",
          onOk: async () => {
            try {
              let data = await Auth.signOut();
              Vue.prototype.$user = null;
              this.$router.push({ name: "Login" });
            } catch (error) {
              console.log("error signing out: ", error);
            }
          },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.home {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.content {
  padding: 20px;
  .title {
    font-size: 16px;
    padding-bottom: 10px;
  }
}
</style>
