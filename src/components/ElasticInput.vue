<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      v-model="email"
      @change="handle"
    />
    <span class="input-group-text" id="basic-addon2">@gmail.com</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  watch: {
    email(newVal, oldVal) {
      this.$emit("email-changed", newVal);
    },
  },
};
</script>