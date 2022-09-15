<template>
  <v-app>

    <!-- Sizes your content based upon application components -->
    <div>

      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> -->
        <!-- If using vue-router -->
        <router-view></router-view>
      <!-- </v-container> -->
    </div>
  </v-app>
</template>

<script>
//import {mapActions} from "vuex";


export default {
  name: 'App',
  components: {
  },

  data: () => ({
    toggleLayout: true,
  }),
  methods: {
  },
  watch: { 
    $route() { 
			if(this.$router.history.current.path == '/user/chats' || this.$router.history.current.path == '/mobile/chat'){
				this.toggleLayout = false;
			}
      else{
        this.toggleLayout = true;
      } 
		} 
	},
  created(){
    if(this.$router.history.current.path == '/user/chats' || this.$router.history.current.path == '/mobile/chat') {
      this.toggleLayout = false;
    }
  }
};
</script>
