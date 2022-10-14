import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue";
import Post from '../view/Post.vue'
import Edit from '../view/Edit.vue'
import Create from '../view/Create.vue'
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: "/Post/:id",
        name: "Post",
        component: Post,
    }, {
        path: "/Create",
        name: "Create",
        component: Create,
    },
    {
        path: "/Edit/:id",
        name: "Edit",
        component: Edit,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;