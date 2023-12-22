<template>
  <div class="">
    <div>
      <NavigationComp class="bg-white" />
    </div>
    <div class="min-h-screen flex items-center justify-center ">
      <div class=" p-8 rounded shadow-xl w-full sm:w-96 bg-white">
        <h1 class="text-2xl font-semibold mb-6 text-cyan-800">Login</h1>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-cyan-800">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Email" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-cyan-800">Password</label>
            <input type="password" v-model="password" id="password" placeholder="Password" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <button type="submit"
            class="w-full  border-1 border-cyan-800 text-cyan-800 p-2 rounded-md hover:bg-cyan-700 hover:text-white transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
    <div class="-mt-32">
      <footerCompt></footerCompt>
    </div>
  </div>
</template>

<script>
import NavigationComp from "@/components/navCompt.vue";
import footerCompt from "@/components/footerCompt.vue";

export default {
  name: "LoginView",
  components: {
    NavigationComp,
    footerCompt
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.userLoggedIn;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", { email: this.email, password: this.password });
        if (this.isUserLoggedIn) {
          this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/");
        }

        if (this.isUserLoggedIn && this.user.username === 'administrator') {
          this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/admin");
        } else {
          await this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
      }
    }
  }
}
</script>