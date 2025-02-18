<template>
  <header :class="(['w - full', 'text - sm'], headerHeightClass)">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex items-center h-full text-xl"
          >Careers</router-link
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="h-full ml-7 first:ml-0"
            >
              <router-link
                :to="item.url"
                class="flex items-center h-full py-2.5"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button
            v-else
            text="Sign in"
            @click="LOGIN_USER()"
          ></action-button>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>
<script>
import { mapMutations, mapState } from "vuex";

import profileImage from "@/components/Navigation/profileImage.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import { LOGIN_USER } from "@/store";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    profileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Life at Careers", url: "/" },
        { text: "Benefits", url: "/" },
        { text: "Students", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    // loginUser() {
    //   this.$store.commit(LOGIN_USER);
    // },
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
