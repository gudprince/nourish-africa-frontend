<template>
  <div id="login-container">
    <div
     class="text-center mt-4"
    >
      <h1 class="font-weight-bold headline white--text align-center">
        ProptyFinder
      </h1>
    </div>
    <div class="text-center d-flex justify-center mt-n14">
      <v-card
        :width="$vuetify.breakpoint.smAndDown ? '95%' : '40%'"
        class="mt-7"
        color="#312d39"
      >
        <div
          class="white--text"
          :class="{ 'px-5': $vuetify.breakpoint.smAndDown }"
        >
            
            <v-row justify="center" class="mt-8">
                <v-col cols="12" sm="9">
                  <v-alert
                    class="mb-4"
                    v-show="success"
                    type="success"
                  >
                    Reset password link sent to your email
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
        </div>
        <v-btn
          id="v-btn"
          v-show="loading == false"
          @click="submit"
          depressed
          :width="$vuetify.breakpoint.smAndDown ? '87%' : '74%'"
          class="mb-6 py-md-6 mt-n2 white--text"
        >
          Email Password Reset Link
        </v-btn>
        <v-progress-circular
          v-show="loading"
          :width="3"
          class="mb-6"
          color="white"
          indeterminate
        >
        </v-progress-circular>
      </v-card>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import {mapState } from "vuex";
import { mapActions} from "vuex";
import { required} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    email: { required},
  },
  metaInfo() {
		return {
			title: `Forgot Password| Housefinder.com.ng`,
			
		}
	},
  data() {
    return {
      loading: false,
      success: false,
      email: '',
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed:{
    ...mapState({authenticated: state => state.auth.authenticated, jwt: state => state.auth.jwt }),
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Email is required.')
      return errors
    },
  },
  methods: {
    ...mapActions(["forgotPassword"]),
    async submit(){
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true;
        let form = {email: this.email};
        let response = await this.forgotPassword(form);
        if(response.success){
          this.loading = false;
          this.$toastr.s(response.message);
          this.success = true;
        }
      }
      else{
        this.$toastr.e("some field are missing");
      }
    }
  }
};
</script>

<style scoped>
#v-card-header {
  color: #896d19;
}
#v-btn {
  background-color: #896d19;
}

#register-link {
  color: #896d19;
}
</style>