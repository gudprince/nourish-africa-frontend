<template>
  <main class="fix-top hidden-sm-and-down headerColor py-3">
    <v-container elevation-0 class="header-1 hidden-sm-and-down">
      <router-link :to="{ path: `/` }" class="trans-logo link">
        <img height="30px" src="../../assets/images/housefinderLogo.png" />
      </router-link>
      <nav>
        <ul class="menu-items">
          <li class="link">
            <router-link :to="{ path: `/` }">Home</router-link>
          </li>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <li class="link" v-bind="attrs" v-on="on">
                Buy/Rent
              </li>
            </template>
            <v-list class="mt-8">
              <v-list-item
                class="mt-n4 "
                v-for="(item, index) in categories"
                :key="index"
              >
                <router-link
                  class="black--text link"
                  :to="{ path: `/properties/${item.slug}` }"
                  >{{ item.name }}</router-link
                >
              </v-list-item>
            </v-list>
          </v-menu>
          <li class="link">
            <router-link
              class="black--text link"
              :to="{ path: `/product/create` }"
              >Sell</router-link
            >
          </li>
          <li class="link">
            <router-link class="black--text link" :to="{ path: `/agents` }"
              >Our Agents</router-link
            >
          </li>



          <v-menu class="requestsZindex" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <li
                v-bind="attrs"
                v-on="on"
              >
                Request Property
              </li>
              
            </template>
            <v-list class="mt-3">
              <v-list-item
                v-for="(item, index) in requests"
                :key="index"
              >
                <router-link class="black--text link" :to="{ path: `${item.url}` }">{{ item.name }}</router-link>
              </v-list-item>
            </v-list>
          </v-menu>


          <router-link class=" link" :to="{ path: `/login` }">
            <v-btn
              v-if="login != 'true'"
              style="font-size: 15px; background-color: #cce2ff"
              text
              color="#0062DF"
              class="ml-5 px-6 font-weight-bold hidden-sm-and-down"
            >
              Login
            </v-btn>
          </router-link>
          <router-link class="white--text link" :to="{ path: `/register` }">
            <v-btn
              v-if="login != 'true'"
              style="font-size: 15px"
              depressed
              dark
              color="#0062DF"
              class="font-weight-bold ml-5 hidden-sm-and-down"
            >
              Sign Up
            </v-btn>
          </router-link>

          <v-menu v-if="login == 'true'">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                depressed
                fab
                small
                class="justify-center"
              >
                <v-icon color="indigo" size="30px">
                  mdi-account
                </v-icon>
              </v-btn>
            </template>
            <v-list class="mt-8">
              <v-list-item class="mt-4 ">
                <router-link
                  class="grey--text link "
                  :to="{ path: `/dashboard` }"
                  >Dashboard</router-link
                >
              </v-list-item>
              <v-list-item class="mt-n4 ">
                <router-link
                  class="grey--text link"
                  :to="{ path: `/user/profile` }"
                  >Profile</router-link
                >
              </v-list-item>
              <v-list-item class="mt-n4 ">
                <a class="grey--text link" @click="userLogout">Logout</a>
              </v-list-item>
            </v-list>
          </v-menu>
        </ul>
      </nav>
    </v-container>
  </main>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    requests: [
        { name: 'Post request', url: '/requests/create' },
        { name: 'View all property requests', url: '/requests' },
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
  },
  created() {
    this.toggleLogin();
  },
};
</script>

<style>
.headerColor {
  background: #fdfcfa;
}
.requestsZindex {
  /* z-index: 100; */
}
.header-1 {
  /* background: #ffffff; */
  position: relative !important;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 9%) !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1;
}
.header-1 a {
  text-decoration: none;
  color: #1a237e;
}
.header-1 ul {
  list-style: none;
}
.logo {
  font-size: 2rem;
}
.menu-items {
  display: flex;
  align-items: center;
}
.menu-items li {
  padding: 0.5rem 1rem;
  transition: background 0.3s ease-in-out;
}
.menu-items li:hover {
  background-color: #e0e0e0;
}
.dropdown {
  position: relative;
}
.dropdown-menu,
.menu-right {
  position: absolute;
  background: #122331;
  width: 100%;
  top: 50px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.menu-right {
  top: 0;
  left: 110%;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.dropdown:hover .dropdown-menu {
  top: 34px;
  opacity: 1;
  visibility: visible;
}
.dropdown-right:hover .menu-right {
  left: 100%;
  opacity: 1;
  visibility: visible;
}
.mega-menu {
  position: absolute;
  left: 0;
  width: 80vw;
  top: 80px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}
.mega-menu .content {
  background: #122331;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}
.blog .content {
  grid-template-columns: repeat(3, 1fr);
}
.content .col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 3rem;
}
.content .col .img-wrapper {
  display: block;
  position: relative;
  width: 100%;
  height: 20vw;
  overflow: hidden;
}
.content .col .img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.content .col img {
  width: 100%;
  transition: transform 0.3s ease-in-out;
}
.content .col .img-wrapper:hover img {
  transform: scale(1.1);
}
.content .col h2 {
  color: #ff652f;
  font-size: 1.2rem;
  line-height: 3rem;
  font-weight: bold;
}
.content .col p {
  line-height: 1.2rem;
}
.content .col .mega-links {
  border-left: 1px solid #1a3246;
}
.content .col .read-more {
  display: inline-block;
  padding-top: 1rem;
  color: #427dad;
  transition: color 0.3s ease;
}
.col .mega-links li,
.col .mega-links li a {
  padding: 0 1rem;
}
.menu-items li:hover .mega-menu {
  top: 50px;
  opacity: 1;
  visibility: visible;
}
.content .col .read-more:hover {
  color: #ff652f;
}

.menu-hover:hover {
  background-color: #f6f6ff;
}
.link-head {
  color: #171b70;
  font-weight: 900;
  font-size: 16px;
}

.link-text {
  font-size: 13px;
}
.link {
  text-decoration: none;
  cursor: pointer;
}

.fix-top {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
