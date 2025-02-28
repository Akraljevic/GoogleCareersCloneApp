import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faSearch,
  faAngleDown,
  faAngleUp,
  faCheck,
  faMoneyBills,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import App from "@/App.vue";
import "@/assets/tailwind.css";
import router from "@/router";
import store, { key } from "@/store";

library.add(faSearch);
library.add(faLocationDot);
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faCheck);
library.add(faMoneyBills);
library.add(faBriefcaseMedical);
library.add(faClock);
createApp(App)
  .use(store, key)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
