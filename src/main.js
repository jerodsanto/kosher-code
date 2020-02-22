// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuex from "vuex";
import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/tailwind.css";
import "~/assets/global.css";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(router);
  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      theme: "theme-dark"
    },
    mutations: {
      toggleTheme() {
        this.state.theme =
          this.state.theme === "theme-dark" ? "theme-light" : "theme-dark";
      }
    }
  });
}