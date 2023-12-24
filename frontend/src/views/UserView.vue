<template>
  <div class="view-body">
    <div>
      <navCompt class="">

      </navCompt>
    </div>
    <div>
      <user>

      </user>
    </div>
    <div>
      <footerCompt>

      </footerCompt>
    </div>
  </div>
</template>

<script>
import user from "@/components/userCompt.vue"
import navCompt from "@/components/navCompt.vue";
import footerCompt from "@/components/footerCompt.vue";
export default {
  components: {
    user,
    navCompt,
    footerCompt
  },
  name: "UserView",
  methods: {
    parseDate(date) {
      return new Date(Date.parse(date)).toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
  },
  computed: {
    user() {
      this.parseDate(this.$store.state.user.registrationDate);
      return this.$store.state.user;
    }
  }
}
</script>

<style scoped>
.view-body {
  margin: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

span {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  font-size: 20px;
}
</style>