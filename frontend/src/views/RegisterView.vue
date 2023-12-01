<template>
  <div class="">
    <div>
      <NavigationComp />
    </div>
    <div class="min-h-screen flex items-center justify-center pt-5 bg-orange-50">
      <div class="bg-orange-50 p-8 rounded shadow-xl border-1 border-cyan-800 w-full sm:w-96">
        <h1 class="text-2xl font-semibold mb-6">Register</h1>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
            <input type="text" v-model="username" id="username" placeholder="Username" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" v-model="email" id="email" placeholder="Email" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" v-model="password" id="password" placeholder="Password" required
              class="mt-1 p-2 w-full border rounded-md" />
          </div>

          <button type="submit"
            class="w-full bg-orange-50 border-1 border-cyan-800 text-cyan-800 p-2 rounded-md hover:bg-cyan-700 hover:text-white transition-all">
            Register
          </button>
        </form>
      </div>
    </div>
    <div class="-mt-16">
      <footerCompt></footerCompt>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import NavigationComp from "@/components/navCompt.vue";
import footerCompt from "@/components/footerCompt.vue";

export default {
  name: "RegisterView",
  components: {
    NavigationComp,
    footerCompt
  },
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    register() {
      Api.post("/users/register", {
        username: this.username,
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$toast.success("Registration succeeded!", { position: "bottom-left", duration: 1000 });
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error("Registration failed!", { position: "bottom-left", duration: 1000 });
        })
    }
  }
}
</script>
