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
          <profile-image
            v-if="isLoggedIn"
            text="Sign out"
            @click="LOGOUT_USER()"
          />
          <action-button
            v-else
            text="Sign in"
            @click="LOGIN_USER()"
          ></action-button>
        </div>
      </div>
      <sub-nav v-if="showSubnav" />
    </div>
  </header>
</template>
<script>
// import { mapMutations, mapState } from "vuex";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import profileImage from "@/components/Navigation/profileImage.vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
// import { LOGIN_USER, LOGOUT_USER } from "@/store/constants";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    profileImage,
    SubNav,
  },
  setup() {
    const menuItems = ref([
      { text: "Teams", url: "/teams" },
      { text: "Locations", url: "/" },
      { text: "Life at Careers", url: "/" },
      { text: "Benefits", url: "/" },
      { text: "Students", url: "/" },
      { text: "Jobs", url: "/jobs/results" },
    ]);
    const store = useStore();
    const route = useRoute();
    const isLoggedIn = computed(() => store.state.isLoggedIn);
    const showSubnav = computed(
      () => isLoggedIn.value && route.path === "/jobs/results"
    );
    const headerHeightClass = computed(() => {
      if (route.path === "/jobs/results") {
        return { "h-16": !isLoggedIn.value, "h-32": isLoggedIn.value };
      }
      return "h-16";
    });
    const LOGIN_USER = () => store.commit("LOGIN_USER");
    const LOGOUT_USER = () => store.commit("LOGOUT_USER");
    return {
      menuItems,
      headerHeightClass,
      isLoggedIn,
      showSubnav,
      LOGIN_USER,
      LOGOUT_USER,
    };
  },
};
</script>
