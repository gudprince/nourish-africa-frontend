<template>
  <v-app>
     <v-row class="px-4">
          <v-col class="col-12 col-sm-3 col-md-3 col-lg-2">
              <User-Side-Bar/> 
          </v-col>
          <v-col class="col-12 col-md-9 col-lg-10 grey lighten-3 ">
              <div :class="{'pr-8': $vuetify.breakpoint.smAndDown}">
                  <h3 class="px-2 pt-6 mb-6 mt-2 grey--text text--darken-4 text-md-h6">
                      <router-link class="black--text text-decoration-none" :to="`/dashboard`">
                          <v-icon class='mt-n1 mr-2 hidden-md-and-up'>mdi-arrow-left</v-icon>
                      </router-link>  
                      Add Company
                  </h3>    
              </div>
              <v-form ref="form" class="white px-2 mt-4">
              <v-container class="mt-4">
                <v-row class="mt-n2">
                  <v-col cols="12">
                    <v-text-field
                      color="grey "
                      v-model="current_password"
                      label="Current Password"
                      :rules="[rules.required, rules.min]"
                      hint="At least 8 characters"
                      outlined
                      filled
                      type="password"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      color="grey"
                      v-model="new_password"
                      label="New Password"
                      outlined
                      :rules="[rules.required, rules.min]"
                      hint="At least 8 characters"
                      filled
                      type="password"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      color="grey"
                      v-model="confirm_new_password"
                      label="Confirm New Password"
                      :rules="[rules.required, passwordConfirm]"
                      hint="At least 8 characters"
                      outlined
                      filled
                      type="password"
                    >
                    </v-text-field>
                    <div class="float-right">
                      <v-btn
                        v-show="loading == false"
                        @click="updatePassword"
                        color="#0062df"
                        depressed
                        class="mb-4 darken-4 ma-2 white--text"
                      >
                        Update Password
                      </v-btn>
                      <v-progress-circular
                        v-show="loading"
                        :width="3"
                        class="mb-4"
                        color="green"
                        indeterminate
                      >
                      </v-progress-circular>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>  
          </v-col>
      </v-row>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import UserSideBar from "../../components/auth/UserSideBar";
export default {
  components: { UserSideBar},
  data() {
    return {
      new_password: "",
      current_password: "",
      confirm_new_password: "",
      loading: false,
      UserId: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  computed: {
    passwordConfirm() {
      return () =>
        this.new_password === this.confirm_new_password ||
        "password must match";
    },
  },
  methods: {
    ...mapActions(["resetPassword"]),
    async updatePassword() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let data = {
          new_password: this.new_password,
          current_password: this.current_password,
          id: this.UserId,
        };
        let response = await this.resetPassword(data);
        if (response.data.success == true) {
          let token = response.data.data;
          localStorage.setItem("token", token);
          this.$toastr.s(response.data.message);
          this.loading = false;
        } else {
          this.$toastr.e(response.data.message);
          this.loading = false;
        }
      }
    },
  },
  created() {
    let authUser = localStorage.getItem("authUser");
    let user = JSON.parse(authUser);
    this.UserId = user.id;
  },
};
</script>
