<template>
  <div
    class="mt-2 overflow-hidden hidden-md-and-up"
    style="border-bottom: 1px solid #ddd"
  >
    <v-card class="" flat>
      <v-app-bar class="white" flat>
        <router-link :to="{ path: `/` }">
          <img height="23px" src="../../assets/images/housefinderLogo.png" />
        </router-link>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>

      <v-navigation-drawer fixed class="hidden-md-and-up" v-model="drawer">
        <template>
          <v-card class="mx-auto elevation-0 " width="300">
            <div class="my-2">
              <v-list-item to="/" class="trans-logo" v-if="login != 'true'">
                <img
                  height="20px"
                  src="../../assets/images/housefinderLogo.png"
                />
              </v-list-item>
              <router-link
                class="text-decoration-none px-2 py-2"
                :to="{ path: `/dashboard` }"
                v-if="login == 'true'"
              >
                <v-avatar v-if="authImage" size="36px" class="mr-4">
                  <img alt="Avatar" :src="authImage" />
                </v-avatar>
                <v-avatar v-else size="36px" class="mr-4">
                  <img else src="../../assets/avatar.png" alt="profile_image" />
                </v-avatar>
                <strong class="">{{ authName }}</strong>
                <div class="ml-14 mt-n2 text-subtitle-2 grey--text">
                  Welcome back
                </div>
              </router-link>
            </div>
            <v-divider></v-divider>
            <v-list>
              <v-list-item class="mb-n3" to="/">
                <v-icon class="mr-2">mdi-home-outline</v-icon>
                <v-list-item-title class="mobile-font ">Home</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-n3 mt-3" @click.prevent="toggleCategory">
                <v-icon class="mr-2">mdi-arrow-u-left-bottom-bold</v-icon>
                <v-list-item-title class="mobile-font "
                  >Buy/Rent</v-list-item-title
                >
              </v-list-item>

              <div class="ml-6">
                <v-list-item
                  v-show="togglecat"
                  class="mb-n3 mt-3"
                  :to="`/properties/${cat.slug}`"
                  v-for="cat in categories"
                  v-bind:key="cat.id"
                >
                  <v-icon class="mr-2">mdi-view-dashboard-outline</v-icon>
                  <v-list-item-title class="mobile-font ">{{
                    cat.name
                  }}</v-list-item-title>
                </v-list-item>
              </div>

              <v-list-item class="mb-n3 mt-2" to="/product/create">
                <v-icon class="mr-2">mdi-arrow-u-right-top-bold</v-icon>
                <v-list-item-title>Sell</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-n3 mt-2" @click.prevent="toggleRequest">
                <v-icon class="mr-2">mdi-email-open-multiple-outline</v-icon>
                <v-list-item-title>Request Property</v-list-item-title>
              </v-list-item>

               <div class="ml-6">
                <v-list-item
                  v-show="togglereq"
                  class="mb-n3 mt-3"
                  v-for="(req,index) in requests"
                  :key="index"
                  :to="`${req.url}`"
                  
                >
                  <v-icon class="mr-2">{{req.icon}}</v-icon>
                  <v-list-item-title class="mobile-font ">{{
                    req.name
                  }}</v-list-item-title>
                </v-list-item>
              </div>

              <v-list-item class="mb-n3 mt-2" to="/agents">
                <v-icon class="mr-2">mdi-account-group-outline</v-icon>
                <v-list-item-title>Our Agents</v-list-item-title>
              </v-list-item>

              <v-list-item class="mb-n3 mt-2" to="/contact">
                <v-icon class="mr-2">mdi-face-agent</v-icon>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>

              <v-list-item class="mt-2" v-if="login != 'true'">
                <v-btn
                  style="font-size: 15px; background-color: #cce2ff; color:#0062DF "
                  class="mb-n4 mr-2"
                  depressed
                  @click="userLogin"
                >
                  Login
                </v-btn>

                <v-btn
                  class="mb-n4 darken-4 white--text"
                  @click="userSignup"
                  color="#0062DF"
                  depressed
                >
                  Signup
                </v-btn>
              </v-list-item>
              <v-list-item
                class="mt-2 "
                v-if="login == 'true'"
                @click="userLogout"
              >
                <v-btn
                  depressed
                  color="#0062DF"
                  class="mb-n4 mr-2 lime darken-4 white--text"
                >
                  Logout
                </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </template>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    togglecat: false,
    togglereq: false,
    drawer: false,
    group: null,
    authName: "",
    authImage: "",

    requests: [
        { name: 'Post request', url: '/requests/create', icon: 'mdi-note-edit-outline' },
        { name: 'View all requests', url: '/requests', icon: 'mdi-format-list-checkbox'  },
      ],
  }),
  computed: {
    ...mapState({ login: state => state.auth.isLogin }),
    ...mapGetters(["categories"]),
  },
  methods: {
    ...mapActions(["logout"]),
    ...mapMutations(["setLogin"]),
    async userLogout() {
      await this.logout();
      localStorage.setItem("login", "false");
      this.setLogin("false");
      this.$router.push(`/login`);
    },
    async toggleLogin() {
      let data = localStorage.getItem("login");
      await this.setLogin(data);
    },
    toggleCategory() {
      this.togglecat = !this.togglecat;
    },
    toggleRequest() {
      this.togglereq = !this.togglereq;
    },
    userLogin() {
      this.$router.push(`/login`);
    },
    userSignup() {
      this.$router.push(`/register`);
    },
  },
  created() {
    let user = localStorage.getItem("authUser");
    let authUser = JSON.parse(user);
    if (authUser) {
      this.authName = authUser.full_name;
      this.authImage = authUser.image;
    }
    this.toggleLogin();
  },
  watch: {
    group() {
      this.drawer = false;
    },
    $route() {
      let user = localStorage.getItem("authUser");
      let authUser = JSON.parse(user);
      if (authUser) {
        this.authName = authUser.full_name;
        this.authImage = authUser.image;
      }
    },
  },
};
</script>

<style>
.mobile-font {
  font-size: 16px;
}
</style>
