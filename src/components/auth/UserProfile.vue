<template>
  <v-app>
    <v-row class="px-4">
			<v-col class="col-12 col-sm-3 col-md-3 col-lg-2">
        <User-Side-Bar/> 
      </v-col>
      <v-col class="col-12 col-md-9 col-lg-10 grey lighten-3 ">
				<div v-if="skeLoader">
					<skeleton-loader/>
				</div>
        <div v-else >
          <h2 class="pt-6 px-2 mb-4">Profile</h2>
          <v-form ref="form" class="px-2 mb-4">
          <v-row >
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
          <v-row  class="mt-n8">
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
            <v-row  class="mt-n8">
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
          <v-row class="mt-n8">
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
          <v-btn
            v-show="loading == false"
            id="v-btn"
            depressed
            color="blue"
            @click="updateProfile"
            :width="$vuetify.breakpoint.smAndDown ? '87%' : '75%'"
            class="py-6 white--text"
          >
            Update
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
      </v-col>
		</v-row>
  </v-app>
</template>

<script>
import {mapActions } from "vuex";
import UserSideBar from "../../components/auth/UserSideBar";
export default {
  components: {UserSideBar},
  data: () => ({
    loading: false,
    errorEmail: false,
    new_password: "",
    form: {},
    imageError: false,
    rules: {
      required: value => !!value || "This Field is Required.",
      min: v => v.length >= 8 || "Min 8 characters",
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
  },
  methods: {
    ...mapActions(["updateUser", "resetPassword"]),
    onChange(event) {
      this.getLga(event);
    },
    async updateProfile() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        let data = this.form;
        console.log(data);
        let response = await this.updateUser(data);
        if (response.data.success == true) {
          this.$toastr.s("Update successful");
          this.loading = false;
        } else {
          this.$toastr.e(response.data.message);
          this.loading = false;
        }
      } else {
        this.$toastr.e("an error occcured");
      }
    },
  },
  created() {
    let authUser = localStorage.getItem("authUser");
    this.form = JSON.parse(authUser);
    console.log(this.form);
  },
};
</script>
