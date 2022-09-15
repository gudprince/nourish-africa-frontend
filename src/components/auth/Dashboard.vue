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
          <company-list/>
        </div> 
      </v-col>
		</v-row>
  </v-app>
</template>
<script>
import SkeletonLoader from '../layout/SkeletonLoader';
import UserSideBar from '../../components/auth/UserSideBar';
import CompanyList from '../../components/auth/CompanyList';
export default {
  components: {UserSideBar, SkeletonLoader, CompanyList},
  data () {
    return {
      full_name: '',
      checkbox: true,
      skeLoader: false,
    }
  },
  created(){
    let data = localStorage.getItem('authUser')
    let authUser = JSON.parse(data);
    this.full_name = authUser.name;
  }
}
</script>
<style scoped>
#propertyList-main {
  width: 100%;
}

.properylist-wrapper {
  background-color: white;
}

.card-property-title {
  color: #4A425F;
}

.card-category-title {
  color: #837E91;
}
.card-price-bottom {
    background-color: #837E91;
}

.card-price-bottom-selected {
    background-color: #6951A4;
}

.card-price-price {
    color: #896D19;
}

</style>
