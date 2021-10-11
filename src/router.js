import { createRouter, createWebHashHistory } from "vue-router";
import FamilyMembersList from "./views/family-members-list";

const routes = [
  {
    path: "/",
    component: FamilyMembersList
  },
  {
    path: "/membri/:id",
    component: () => import("@/views/family-member-item")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
