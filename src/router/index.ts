import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";
// import JobView from "@/views/JobView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue");
const TeamsView = () =>
  import(/* webpackChunkName: "teams" */ "@/views/TeamsView.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  { path: "/jobs/results", name: "JobResults", component: JobResultsView },
  { path: "/jobs/results/:id", name: "Job", component: JobView },
  { path: "/teams", name: "Teams", component: TeamsView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

export default router;
