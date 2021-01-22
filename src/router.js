import Vue from "vue";
import Router from "vue-router";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import NewHome from "./pages/NewHome.vue";
import About from "./pages/AboutUs.vue";
import Education from "./pages/Education.vue";
import Procedures from "./pages/Procedures.vue";




Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/education",
      name: "education",
      components: {default: Education, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/about",
      name: "about",
      components: {default: About, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/procedures",
      name: "procedures",
      components: {default: Procedures, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    },
    {
      path: "/home",
      name: "home",
      components: {default: NewHome, header: MainNavbar, footer: MainFooter},
      props: {header: {colorOnScroll: 450}}
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
