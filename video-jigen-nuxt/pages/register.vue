  
<template>
  <v-container fluid>
    <div class="display-3 font-weight-regular my-6 d-flex justify-center">
      Register
    </div>
    <v-row>
      <v-spacer />
      <v-col>
        <UserAuthForm
          :submitForm="registerUser"
          :submitButton="'Register'"
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
    registerUser(registerInfo) {
      alert("You press the button!!");
    },
  },
};
</script>

<style>
</style>