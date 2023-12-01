<template>
  <nav class="bg-stone-300">
    <div class="flex items-center justify-between ">
      <div class="flex items-center px-20 pt-5">
        <div class="flex items-center pt-2">
          <router-link to="/" class="flex items-center">
            <img src="../../public/gils.png" alt="logo" class="w-24 h-24 -mt-5 ml-5">
          </router-link>
        </div>
      </div>

      <div class=" -ml-10 pl-10 -mt-5">
        <div class="flex items-center space-x-10">
          <div>
            <router-link to="/" class="text-cyan-600 hover:text-stone-300">Home</router-link>
          </div>
          <div>
            <router-link to="/product" class="text-cyan-600 hover:text-stone-300">Product</router-link>
          </div>
          <div>
            <router-link to="" class="text-cyan-600 hover:text-stone-300">Gallery</router-link>
          </div>
          <div>
            <router-link to="" class="text-cyan-600 hover:text-stone-300">About</router-link>
          </div>
        </div>
      </div>

      <div class="flex items-center -mt-5">
        <div class=" space-x-3 mr-10 flex">
          <div v-if="!user" class="mr-2">
            <router-link to="/login" class="text-cyan-600 hover:text-stone-300">Login</router-link>
          </div>
          <div v-if="!user">
            <router-link to="/register" class="text-cyan-600 hover:text-stone-300">Register</router-link>
          </div>
        </div>

        <div class="mr-5 -mt-5">
          <div class="space-x-4 flex">
            <div v-if="user" class="">
              <router-link to="/user" class="text-lime-500">{{ user.username }}</router-link>
            </div>
            <div v-if="user" @click="logout" class="text-lime-500 cursor-pointer">
              Log out
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "NavigationComp",
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        if (!this.isUserLoggedIn) {
          this.$toast.success("Successfully logged out.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/login");
        }
      }
      catch (e) {
        console.log(e);
        this.$toast.error("Couldn't log out.", { position: "bottom-left", duration: 1000 });
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: { RouterLink }
}
</script>
