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
                    <v-text-field
                        background-color="white"
                        filled
                        label="Password"
                        type="password"
                        v-model="form.password"
                        @input="$v.form.password.$touch()"
                        @blur="$v.form.password.$touch()"
                        :error-messages="passwordErrors"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center" class="mt-n8">
                <v-col cols="12" sm="9">
                    <v-text-field
                        background-color="white"
                        filled
                        label="Confirm Password"
                        type="password"
                        v-model="form.password_confirmation"
                        @input="$v.form.password_confirmation.$touch()"
                        @blur="$v.form.password_confirmation.$touch()"
                        :error-messages="passwordConErrors"
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
          Reset Password
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
import { required, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],
    validations: {
        form: {
            password: { required, minLength: minLength(8)},
            password_confirmation: { 
            required, 
            minLength: minLength(8),
            sameAs: sameAs('password')
            },   
        }
    },
    metaInfo() {
      return {
        title: `Reset Password - Housefinder.com.ng`,
        
      }
    },
    data() {
        return {
            loading: false,
            email: '',
            token: '',
            form: {
                password: '',
                password_confirmation: '',
                email: '',
                token: '',
            },
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
        passwordErrors () {
            const errors = []
            if (!this.$v.form.password.$dirty) return errors
            !this.$v.form.password.required && errors.push('password is required.')
            !this.$v.form.password.minlength && errors.push('Password must have at least 8 letters.')
            return errors
        },
        passwordConErrors () {
            const errors = []
            if (!this.$v.form.password_confirmation.$dirty) return errors
            !this.$v.form.password_confirmation.required && errors.push('confirm password is required.')
            !this.$v.form.password_confirmation.sameAs && errors.push('Passwords must be identical')
            return errors
        },
    },
    methods: {
    ...mapActions(["changePassword"]),
        async submit(){
            this.$v.$touch()
            if (!this.$v.$invalid) {
                this.loading = true;
                console.log(this.form)
                let response = await this.changePassword(this.form);
                if(response.success){
                    console.log(response)
                    this.loading = false;
                    this.$toastr.s(response.message);
                    this.$router.push(`/login?reset=true`);
                }
                else{
                    this.loading = false;
                    this.$toastr.e(response.message);  
                }
            }
            else{
                this.$toastr.e("some field are missing");
            }
        }
    },
    created(){
        this.form.email = this.$route.query.email;
        this.form.token = this.$route.query.token;
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