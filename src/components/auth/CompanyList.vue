<template>
	<div>
		<v-row class="pt-4">
            <v-col class="col-12 grey lighten-3">
                <div :class="{'pr-8': $vuetify.breakpoint.smAndDown}">
                    <h3 class="mb-6 mt-2 grey--text text--darken-4 text-md-h6">
                        <router-link class="black--text text-decoration-none" :to="`/dashboard`">
                            <v-icon class='mt-n1 mr-2 hidden-md-and-up'>mdi-arrow-left</v-icon>
                        </router-link>  
                        Company List
                    </h3>    
                </div>
				<div v-if="skeLoader">
					<skeleton-loader/>
				</div>
				<v-data-table
					v-if="skeLoader == false"
					:headers="headers"
					:items="companies"
					sort-by="name"
					class="elevation-1"
					:search="search"
				>   
					<template v-slot:top>
						<v-toolbar
						flat
						>
							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								label="Search"
								single-line
								hide-details
							>
							</v-text-field>
							<v-spacer></v-spacer>
							<v-dialog
								v-model="dialog"
								max-width="500px"
							>	
								<template v-slot:activator="{attrs }">
									<v-btn
										dark
										class="mb-2 lime darken-4 ma-2 white--text"
										v-bind="attrs"
										@click="switchUrl('/company')"
										>
											Add Company
									</v-btn>
								</template>
								
								<v-card>

									<v-card-text>
										<v-container>
											<v-row>
												<v-col
													cols="12"
												>
													<v-form ref="form" class="px-2 mb-4 pt-6">
														<v-row >
															<v-col cols="12" sm="9">
															<v-text-field
																background-color="white"
																label="Name"
																v-model="edited.name"
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
																v-model="edited.company_email"
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
																v-model="edited.location"
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
															@click="update"
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
												</v-col>
                                                <v-col
                                                    cols="12"
                                                    sm="4"
                                                    md="4"
                                                >
                                                </v-col>
											</v-row>
										</v-container>
									</v-card-text>

									<v-card-actions class="">
									<v-spacer></v-spacer>
									<v-btn
										color="grey darken-3"
										class="white--text"
										
										@click="close"
									>
										Cancel
									</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>
							<v-dialog v-model="dialogDelete" max-width="500px">
								<v-card>
									<v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
									<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn class="white--text" color="grey darken-3"  @click="closeDelete">Cancel</v-btn>
										<v-btn v-show="loading == false"  class="white--text" color="red lighten-2"  @click="deleteItemConfirm">OK</v-btn>
										<v-progress-circular
											v-show="loading"
											:width="3"
											class="ml-4"
											color="green"
											indeterminate
										>
										</v-progress-circular>
										<v-spacer></v-spacer>
									</v-card-actions>
								</v-card>
							</v-dialog>	
						</v-toolbar>
					</template>
					<template v-slot:item.actions="{ item }">
						<v-icon
							small
							class="mr-2"
							@click="editItem(item)"
						>
							mdi-pencil
						</v-icon>
						<v-icon
							small
								class="mr-2"
							@click="deleteItem(item)"
						>
							mdi-delete
						</v-icon>
					</template>
				</v-data-table>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import SkeletonLoader from '../layout/SkeletonLoader';
	import { mapActions, mapState } from "vuex";
	export default {
		components: {SkeletonLoader},
		data: () => ({
			skeLoader: false,
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
			search: '',
			dialog: false,
			dialogDelete: false,
			headers: [
				{
				text: 'Name',
				align: 'start',
				sortable: false,
				value: 'name',
				},
				{ text: 'Email', value: 'company_email' },
				{ text: 'Location', value: 'location' },
				{ text: 'Actions', value: 'actions', sortable: false },
			],
			desserts: [],
			editedIndex: '',
            edited:{},
			image: '',
			editedItem: {},
		}),

		computed: {
			...mapState(['companies']),
		},
		methods: {
			...mapActions(["deleteCompany", "updateCompany", "userCompanies"]),
              async update() {
				this.loading = true;
                
               let result = await this.updateCompany(this.edited);
                if(result.success){
                    this.$toastr.s(result.message);
					this.loading = false;
					
                }
                this.close()

            },
			editItem (item) {
				this.editedIndex = item.id
				this.edited = item
				this.dialog = true
			},

			deleteItem (item) {
				this.editedIndex = item.id;

				this.editedItem = item;
				this.dialogDelete = true
			},
			async deleteItemConfirm () {
				this.loading = true;
				let data = await this.deleteCompany(this.editedIndex)
				if(data.data){
					this.$toastr.s(data.message);
					this.loading = false;
					this.loadData();
					
				}
				else{
					this.$toastr.e(data.message);
				}
				this.closeDelete()
			},
			close () {
				this.dialog = false
				
			},

			closeDelete () {
				this.dialogDelete = false
				this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem)
				this.editedIndex = -1
				})
			},
			
			async loadData(){
				this.skeLoader = true;
				await this.userCompanies();
				this.skeLoader = false;
			},
			switchUrl (url) {
				this.$router.push(`${url}`);
			},
		},
		created(){
			this.loadData();
		}
	}
</script>