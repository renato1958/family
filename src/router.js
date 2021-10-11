import { createRouter, createWebHashHistory } from "vue-router";
import FamilyMembersList from "./views/family-members-list";
import FamilyMemberItem from "./views/family-member-item";

const routes = [
  { path: "/", component: FamilyMembersList },
  { path: "/membri/:id", component: FamilyMemberItem }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
