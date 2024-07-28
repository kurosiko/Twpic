import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import "../style.css";
import { createMemoryHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
    ],
});

export default router;
