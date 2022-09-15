<template>
  <div id="login-container">
    <div class="text-center mt-8">
      <h1 class="font-weight-bold headline align-center">
        Email: prince@example.com
      </h1>
    </div>
    <div class="text-center d-flex justify-center mt-n14">
      <v-card
        :width="$vuetify.breakpoint.smAndDown ? '95%' : '40%'"
        class="mt-7"
        color=""
        outlined
      > 

        <h1 class="pt-4 font-weight-bold headline align-center">
          Email: prince@example.com
        </h1>
        <h1 class="font-weight-bold headline align-center">
        Password: 12345678
      </h1>
        <h1
          id="v-card-header"
          class="mt-5"
          :class="{ headline: $vuetify.breakpoint.smAndDown }"
        >
          Login
        </h1>
        <p class=" mt-3 mb-7">Welcome Back</p>
        <div class="px-4">
          <v-alert v-show="loginError" class="mb" type="error">
            invalid password/email address
          </v-alert>
        </div>
        <div
          class="white--text"
          :class="{ 'px-5': $vuetify.breakpoint.smAndDown }"
        >
          <v-row justify="center" class="mt-n3">
            <v-col cols="12" sm="9">
              <v-alert v-show="reset" class="mb-4" type="success">
                Password reset Successfully
              </v-alert>
              <v-text-field
                background-color="white"
                label="Email"
                v-model="email"
                filled
                type="email"
                :error-messages="emailErrors"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-n3">
            <v-col cols="12" sm="9">
              <v-text-field
                background-color="white"
                label="Password"
                filled
                v-model="password"
                :error-messages="passwordErrors"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                class="mt-n5"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-btn
          id="v-btn"
          v-show="loading == false"
          @click="loginUser"
          depressed
          :width="$vuetify.breakpoint.smAndDown ? '87%' : '74%'"
          class="py-6 mt-n2 white--text"
        >
          Login
        </v-btn>
        <v-progress-circular
          v-show="loading"
          :width="3"
          class="mb-4"
          color="blue"
          indeterminate
        >
        </v-progress-circular>
        <div
          class="d-flex justify-space-between mx-16 px-2 py-6"
          :class="{ 'mx-n1 px-6': $vuetify.breakpoint.smAndDown }"
        >
          <p id="register-link" class="">
            <router-link
              class="text-decoration-none"
              :to="{ path: `/register` }"
            >
              Register
            </router-link>
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required},
    password: { required},
  },
  data() {
    return {
      reset: false,
      loading: false,
      loginError: "",
      email: "",
      password: "",
      show1: false,
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      jwt: state => state.auth.jwt,
    }),
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.required && errors.push("Email is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("password is required.");
      return errors;
    },
  },
  methods: {
    ...mapActions(["login"]),
    async loginUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loading = true;
        let form = { email: this.email, password: this.password };
        let response = await this.login(form);
        if (response == true) {
          this.loading = false;
          //await this.setLogin(true);
          localStorage.setItem("login", "true");
          this.$toastr.s("Login successful");
          this.$router.push(this.$route.query.redirect || "/");
        } else {
          this.$toastr.e("invalid password/email address");
          this.loginError = true;
          this.loading = false;
        }
      } else {
        this.$toastr.e("some field are missing");
      }
    },
  },
  created() {
    if (this.$route.query.reset) {
      this.reset = true;
    }
  },
};
</script>

<style scoped>
#v-card-header {
  color: #0062df;
}
#v-btn {
  background-color: #0062df;
}

#register-link {
  color: #896d19;
}
</style>
