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
                <v-form ref="form" class="px-2 mb-4">
                    <v-row>
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
                            label="Company Email"
                            type="email"
                            v-model="form.company_email"
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
                    <v-row class="mt-n8">
                        <v-col cols="12" sm="9">
                        <v-text-field
                            background-color="white"
                            label="Location"
                            v-model="form.location"
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
                        @click="save"
                        :width="$vuetify.breakpoint.smAndDown ? '87%' : '75%'"
                        class="py-6 white--text"
                    >
                        Save
                    </v-btn>
                    <v-btn
                        v-show="loading "
                        id="v-btn"
                        depressed
                        color="blue"
                        :width="$vuetify.breakpoint.smAndDown ? '87%' : '75%'"
                        class="py-6 white--text"
                    >
                        <v-progress-circular
                            :width="3"
                            color="white"
                            indeterminate
                        >
                        </v-progress-circular>
                    </v-btn>
                </v-form>  
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import { mapActions} from "vuex";
import UserSideBar from '../../components/auth/UserSideBar';
export default {
    components: {UserSideBar},
    data: () => ({
        loading: false,
        errorEmail: false,
        form: {
            name: "",
            company_email: "",
            location: "",
        },
        rules: {
            required: value => !!value || "This Field is Required.",
            min: v => v.length >= 8 || "Min 8 characters",
        },
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
    }),
    computed:{
    },
    methods: {
        ...mapActions(["addCompany"]),
        async save() {
            if (!this.$refs.form.validate()) {
                this.$toastr.e("Some Fields Are Missing ");
            }
            else {
                this.loading = true;

                let result = await this.addCompany(this.form);
                if(result.success){
                    this.$toastr.s(result.message);
                    this.$router.push(`/`);
                }
                else{
                    this.loading = false;
                    this.$toastr.e(result.message);  
                }
            }
        },
    }
}
</script>
