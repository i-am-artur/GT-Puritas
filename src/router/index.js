import { createRouter, createWebHistory } from "vue-router";

const wwwRoot = "/gt";

const routes = [
  {
    path: wwwRoot,
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: wwwRoot + "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue"),
  },
  {
    path: wwwRoot + "/experience",
    name: "Experience",
    component: () =>
      import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
  {
    path: wwwRoot + "/certificates",
    name: "Certificates",
    component: () =>
      import(
        /* webpackChunkName: "certificates" */ "../views/Certificates.vue"
      ),
  },
  {
    path: wwwRoot + "/contacts",
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
