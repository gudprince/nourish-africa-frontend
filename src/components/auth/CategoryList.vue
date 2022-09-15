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
                        Category List
                    </h3>    
                </div>
				<div v-if="skeLoader">
					<skeleton-loader/>
				</div>
				<v-data-table
					v-if="skeLoader == false"
					:headers="headers"
					:items="categoriesData"
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
										@click="switchUrl('/category/create')"
										>
											Add Category
									</v-btn>
								</template>
								
								<v-card>
									<v-card-title>
										<span class="text-h5">{{ formTitle }}</span>
									</v-card-title>

									<v-card-text>
										<v-container>
											<v-row>
												<v-col
													cols="12"
												>
													<v-text-field
                                                        color="grey"
                                                        v-model="edited.name"
                                                        label="Title"
                                                        outlined
                                                        filled
                                                     

                                                    >
                                                    </v-text-field>
												</v-col>
												<v-col
													cols="12"
												>
													<v-file-input
                                                        label="image"
                                                        outlined
                                                        v-model="image"
                                                        filled
                                                    ></v-file-input>
												</v-col>
                                                <v-col
                                                    cols="12"
                                                    sm="4"
                                                    md="4"
                                                >
                                                    <v-checkbox
                                                        v-model="edited.featured"
                                                        label="Featured"
                                                        color="grey"
                                                    >
                                                    </v-checkbox>
                                                    <v-checkbox
                                                        class="mt-n4"
                                                        v-model="edited.menu"
                                                        label="Menu"
                                                        color="grey"
                                                    >   
                                                    </v-checkbox>
                                                </v-col>
											</v-row>
											<img
												class="mt-n6"
												height="150"
												:src="edited.image ? edited.image : ''"
											>
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
									<v-btn
										v-show="loading == false"
										class="white--text"
										color="green lighten-1"
										
										@click="submit"
									>
										Update
									</v-btn>
									<v-progress-circular
										v-show="loading"
										:width="3"
										class="ml-4"
										color="green"
										indeterminate
									>
									</v-progress-circular>
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
					<template v-slot:item.featured="{item}">
						<v-chip
							:color="getColor(item.featured)"
							small
							dark
							>
							{{ item.featured == 1 ? "Featured" : "Not Featured" }}
						</v-chip>
					</template>
					<template v-slot:item.menu="{item}">
						<v-chip
							:color="getMenuColor(item.menu)"
							small
							dark
							>
							{{ item.menu}}
						</v-chip>
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
	import UserSideBar from '../../components/auth/UserSideBar';
	export default {
		components: {UserSideBar, SkeletonLoader},
		metaInfo() {
			return {
				title: `Category List - Housefinder.com.ng`,
				
			}
		},
		data: () => ({
			skeLoader: false,
			loading: false,
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
				{ text: 'Menu', value: 'menu' },
				{ text: 'Featured', value: 'featured' },
				{ text: 'Actions', value: 'actions', sortable: false },
			],
			desserts: [],
			editedIndex: '',
            edited:{},
			image: '',
			editedItem: {},
		}),

		computed: {
			...mapState(['categoriesData']),
			formTitle () {
				return this.editedIndex === -1 ? 'New Item' : 'Edit Category'
			},
		},
		methods: {
			...mapActions(["deleteCategory", "updateCategory", "adminCategories"]),
              async submit() {
				this.loading = true;
                let featured = this.edited.featured ? 1 : 0;
                let menu = this.edited.menu ? 1 : 0;
                let formData = new FormData()
                if(this.image){
                    formData.append('image', this.image)
                }
                formData.append('name', this.edited.name)
                formData.append('featured', featured)
                formData.append('menu', menu)
                formData.append('id', this.edited.id)
               let result = await this.updateCategory(formData);
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
				let data = await this.deleteCategory(this.editedIndex)
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
			
			async submitr () {         
				console.log(this.edited)
				let data = await this.updateCategory(this.categories);
				if(data.data){
					this.$toastr.s(data.message);
					this.getData();
				}
				else{
					this.$toastr.e(data.message);
				}
			},
			async loadData(){
				this.skeLoader = true;
				await this.adminCategories();
				this.skeLoader = false;
			},
			switchUrl (url) {
				this.$router.push(`${url}`);
			},
			getColor (feature) {
				if (feature == 1) return 'blue'
				else return ''
			},
			getMenuColor (menu) {
				if ( menu ==0) return 'red'
				else return 'green'
			},
		},
		created(){
			this.loadData();
		}
	}
</script>