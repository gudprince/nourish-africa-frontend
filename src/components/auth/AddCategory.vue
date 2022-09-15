<template>
    <div>
        <v-row>
            <v-col class="col-12 col-sm-3 col-md-3 col-lg-2 d-none d-md-block">
                 <User-Side-Bar/> 
            </v-col>
            <v-col class="col-md-9 col-lg-10 grey lighten-3 px-md-4">
                <div :class="{'pr-8': $vuetify.breakpoint.smAndDown}">
                    <h3 class="mb-6 mt-2 grey--text text--darken-4 text-md-h6">
                        <router-link class="black--text text-decoration-none" :to="`/dashboard`">
                            <v-icon class='mt-n1 mr-2 hidden-md-and-up'>mdi-arrow-left</v-icon>
                        </router-link>  
                        Add Category
                    </h3>
                    <div class="float-right mt-n8 mr-n3 mr-md-6">
						<Notification/>		
					</div>    
                </div>
                <div class="white mt-n2">
                    <v-card
                        :width="$vuetify.breakpoint.smAndDown ? '' : '50%'"
                        flat
                    >
                        <v-form class="white px-md-2">
                            <v-container>
                                <h4 class="mb-2">Add Category</h4>
                                <v-row >
                                    <v-col
                                        cols="12"
                                    >   
                                        <v-text-field
                                            color="grey"
                                            v-model="form.name"
                                            label="Title"
                                            outlined
                                            filled
                                            :error-messages="titleErrors"
                                            @input="$v.form.name.$touch()"
                                            @blur="$v.form.name.$touch()"

                                        >
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        class="mt-n8"
                                        cols="12"
                                    >
                                        <v-file-input
                                            label="image"
                                            outlined
                                            v-model="form.image"
                                            filled
                                            :error-messages="imageErrors"
                                            @input="$v.form.image.$touch()"
                                            @blur="$v.form.image.$touch()"
                                        ></v-file-input>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n10">
                                    <v-col
                                        cols="12"
                                        sm="4"
                                        md="4"
                                    >
                                        <v-checkbox
                                            v-model="form.featured"
                                            label="Featured"
                                            color="grey"
                                        >
                                        </v-checkbox>
                                        <v-checkbox
                                            class="mt-n4"
                                            v-model="form.menu"
                                            label="Menu"
                                            color="grey"
                                    >   
                                    </v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-n2">
                                    <v-col
                                        cols="12"
                                    >
                                        <div class="float-right" >
                                            <v-btn 
                                                v-show="loading == false"
                                                @click="submit"
                                                small
                                                class="py-4 mb-4 lime darken-4 ma-2 white--text"
                                            >
                                                Add Category
                                            </v-btn>
                                            <v-btn class="lime darken-4" v-show="loading">
                                                <v-progress-circular
                                                    :width="3"
                                                    color="white"
                                                    indeterminate
                                                ></v-progress-circular>
                                            </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>   
                            </v-container>
                        </v-form>
                    </v-card>
                </div>
            </v-col>
        </v-row> 
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { mapActions} from "vuex";
import { required} from 'vuelidate/lib/validators'
import UserSideBar from '../../components/auth/UserSideBar';
export default {
    components: {UserSideBar},
    mixins: [validationMixin],
    validations: {
        form: {
            name: { required},
            image: { required},
        }
    },
    metaInfo() {
		return {
			title: `Add Category - Housefinder.com.ng`,
			
		}
	},
    data: () => ({
        loading: false,
        form:{
            name: '',
            image: '',
            menu: false,
            featured: false,
        }
    }),
    computed:{
        titleErrors () {
            const errors = []
            if (!this.$v.form.name.$dirty) return errors
            !this.$v.form.name.required && errors.push('name is required.')
            return errors
        },
        imageErrors () {
            const errors = []
            if (!this.$v.form.image.$dirty) return errors
            !this.$v.form.image.required && errors.push('image is required.')
            return errors
        },
    },
    methods: {
        ...mapActions(["addCategory"]),
        async submit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.$toastr.e("Some Fields Are Missing ");
            }
            else {
                this.loading = true;
                let featured = this.form.featured ? 1 : 0;
                let menu = this.form.menu ? 1 : 0;
                let formData = new FormData()
                formData.append('image', this.form.image)
                formData.append('name', this.form.name)
                formData.append('featured', featured)
                formData.append('menu', menu)
                
           
               let result = await this.addCategory(formData);
                if(result.success){
                    this.$toastr.s(result.message);
                    this.$router.push(`/category/index`);
                }

            }
        },
    }
}
</script>
