<template>
  <div>
    <div class="text-center  d-none d-md-block " >
      <v-avatar v-if="userImage">
        <img :src="userImage" alt="profile_image" />
      </v-avatar>
      <v-avatar v-else>
        <img src="../../assets/avatar.png" alt="profile_image" />
      </v-avatar>
      <div class="mt-1 text-subtitle-2">{{ full_name }}</div>
    </div>
    <v-divider></v-divider>
    <v-list class="" >
      <v-list-item-group>
        <v-list-item
          class="mt-n2 text-subtitle-1"
          v-bind:class="{ 'activeBlue darken-2 white--text': currentUrl == item.url }"
          v-for="(item, i) in items"
          :key="i"
          @click="switchUrl(item.url)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content class="ml-n4 text-subtitle-2">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="mt-n2 text-subtitle-1"
          @click="userLogout()"
        >
          <v-list-item-icon>
            <v-icon v-text="`mdi-logout`"></v-icon>
          </v-list-item-icon>
          <v-list-item-content class=" ml-n4 text-subtitle-2">
            <v-list-item-title v-text="`Logout`"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapActions} from "vuex";

export default {
  data: () => ({
    full_name: "",
    currentUrl: "",
    model: 1,
    userType: "",
    userImage: "",
    items: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        url: "/",
      },
      {
        icon: "mdi-account",
        text: "My Profile",
        url: "/user/profile",
      },
    
      {
        icon: "mdi-lock",
        text: "Reset Password",
        url: "/change-password",
      },
    ],
  }),
  computed: {
  },
  methods: {
    ...mapActions(["logout"]),
    switchUrl(url) {
      this.$router.push(`${url}`);
    },
    async userLogout() {
      await this.logout();
      localStorage.setItem("login", "false");
      this.$router.push(`/login`);
    },
  },
  created() {
    let data = localStorage.getItem("authUser");
    let authUser = JSON.parse(data);
    this.full_name = authUser.name;
    this.currentUrl = this.$router.history.current.path;
  },
};
</script>
<style lang="scss" scoped>
.activeBlue {
  background: #0062df;
}
</style>
