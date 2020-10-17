  
<template>
  <v-container fluid>
    <div class="display-3 font-weight-regular my-6 d-flex justify-center">
      Login
    </div>
    <v-row>
      <v-spacer />
      <v-col>
        <UserAuthForm
          :submitForm="loginUser"
          :submitButton="'Login'"
          :freeName="true"
        />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
export default {
  components: {
    UserAuthForm,
  },
  methods: {
    loginUser(loginInfo) {
      console.log(loginInfo);
      this.$auth.loginWith("local", {
        data: {
          username: loginInfo.name,
          password: loginInfo.password,
        },
      });
    },
  },
};
</script>

<style>
</style>