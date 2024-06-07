<template>
  <p>{{ users }}</p>
</template>
<script>
import { useUsersStore } from "@/store/user.js";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(useUsersStore, ["users"]),
  },
  async mounted() {
    // Fetch data from API
    await this.fetchUsers();
  },
  methods: {
    ...mapActions(useUsersStore, ["fetchUsers"]),
  },
};
</script>