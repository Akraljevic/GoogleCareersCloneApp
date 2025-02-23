<template>
  <img
    :src="profileImage"
    class="w-10 h-10 rounded-3xl object-contain hover:shadow-blue duration-150 ease-out cursor-pointer"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  data() {
    return {
      profileImage: "images/rengoAvatar.jpg",
    };
  },
});
</script>
