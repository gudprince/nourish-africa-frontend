<template>
  <div>
    <div class="text-center mt-6">
    </div>
    <div class="text-center mb-8 d-flex justify-center mt-n10">
      <v-card
        class="mt-4"
        color=""
        outlined
        :width="$vuetify.breakpoint.smAndDown ? '95%' : '40%'"
      >
        <h1
          id="v-card-header"
          color="#896D19"
          class="mt-5"
          :class="{ headline: $vuetify.breakpoint.smAndDown }"
        >
          Sign Up
        </h1>
        <div
          class="white--text"
          :class="{ 'px-5': $vuetify.breakpoint.smAndDown }"
        >
          <v-form ref="form">
            <v-row justify="center">
              <v-col cols="12" sm="9">
                <v-text-field
                  background-color="white"
                  label="Name"
                  v-model="form.name"
                  filled
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-n8">
              <v-col cols="12" sm="9">
                <v-text-field
                  background-color="white"
                  label="Email"
                  type="email"
                  v-model="form.email"
                  filled
                  :rules="emailRules"
                ></v-text-field>
                <div
                  v-show="errorEmail"
                  class="mt-n6 mb-6 red--text text-caption"
                >
                  The email address has already been taken.
                </div>
              </v-col>
            </v-row>
              <v-row justify="center" class="mt-n8">
              <v-col cols="12" sm="9">
                <v-text-field
                  background-color="white"
                  label="Phone Number"
                  type="number"
                  :rules="[rules.required]"
                  v-model="form.phone_number"
                  filled
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-n8">
              <v-col cols="12" sm="9">
                <v-text-field
                  background-color="white"
                  label="Address"
                  v-model="form.address"
                  filled
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-n8">
              <v-col cols="12" sm="9">
                <v-text-field
                  background-color="white"
                  label="Country"
                  v-model="form.country"
                  filled
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex justify-center">
              <v-row
                class="mx-4 mt-n8"
                :class="{ 'mx-n3': $vuetify.breakpoint.smAndDown }"
                justify="center"
              >
                <v-col cols="12" sm="5">
                  <v-text-field
                    background-color="white"
                    label="Password"
                    type="password"
                    v-model="form.password"
                    :rules="[rules.required, rules.min]"
                    hint="At least 8 characters"
                    filled
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  :class="{ 'mt-n7': $vuetify.breakpoint.smAndDown }"
                  cols="12"
                  sm="5"
                >
                  <v-text-field
                    background-color="white"
                    label="Confirm Password"
                    v-model="form.confirm_password"
                    :rules="[rules.required, passwordConfirm]"
                    hint="At least 8 characters"
                    type="password"
                    filled
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-btn
              v-show="loading == false"
              id="v-btn"
              depressed
              @click="registerUser"
              :width="$vuetify.breakpoint.smAndDown ? '87%' : '75%'"
              class="py-6 white--text"
            >
              Sign Up
            </v-btn>
            <v-progress-circular
              v-show="loading"
              :width="3"
              class="mb-4"
              color="blue"
              indeterminate
            >
            </v-progress-circular>
          </v-form>
        </div>
        <div
          class="d-flex justify-space-between mx-16 px-2 py-md-6"
          :class="{ 'flex-column mx-n1 px-6': $vuetify.breakpoint.smAndDown }"
        >
          <p style="color: #0062df" class="">Already have an account?</p>
          <p id="register-link" class="">
            <router-link
              style="color: #0062df"
              class="text-decoration-none"
              :to="{ path: `/login` }"
            >
              Sign In
            </router-link>
          </p>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
      errorEmail: false,
      form: {
        name: "",
        address: "",
        email: "",
        password: "",
        confirm_password: "",
        phone_number: "",
        country: "",
      },

      rules: {
        required: value => !!value || "This Field is Required.",
        min: v => v.length >= 8 || "Min 8 characters",
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  computed: {
    ...mapState({
      authenticated: state => state.auth.authenticated,
      jwt: state => state.auth.jwt,
    }),
    passwordConfirm() {
      return () =>
        this.form.password === this.form.confirm_password ||
        "password must match";
    },
  },
  methods: {
    ...mapActions(["register"]),
    async registerUser() {
     // let data = {
       // first_name: this.form.first_name,
       // last_name: this.form.last_name,
        //email: this.form.email,
        //password: this.form.password,
       // phone_number: this.form.phone_number,
      //};
      if (this.$refs.form.validate()) {
        this.loading = true;
        let response = await this.register(this.form);
        if (response.data.success == true) {
          this.loading = false;
          localStorage.setItem("login", "true");
          this.$toastr.s("Registration Successful");
          this.$router.push("/");
        }
        if (response.data.errors) {
          this.$toastr.e(response.data.errors.email[0]);
          this.errorEmail = true;
          this.loading = false;
        }
      } else {
        this.$toastr.e("some field are missing");
        console.log(this.form);
      }
    },
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
  color: #0062df;
}
</style>
