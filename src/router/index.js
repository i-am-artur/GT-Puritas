import { createRouter, createWebHistory } from "vue-router";
import { getLinks } from "../mixins/mixins";

const links = getLinks();

const routes = [
  {
    path: links.home,
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: links.services,
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue"),
  },
  {
    path: links.experience,
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
  {
    path: links.certificates,
    name: "Certificates",
    component: () =>
      import(
        /* webpackChunkName: "certificates" */ "../views/Certificates.vue"
      ),
  },
  {
    path: links.contacts,
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
