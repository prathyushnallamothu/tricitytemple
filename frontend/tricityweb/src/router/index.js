import * as VueRouter from 'vue-router';
import HomePage from '../views/home/HomePage.vue'
import EventDescription from '../views/events/EventDescription.vue'
import RequestPriest from '../views/home/RequestPriest.vue'
const routes = [{
        path: "/",
        component: HomePage,
        meta: {
            title: ""
        }
    },
    {
        path: "/temple-events/:id",
        component: EventDescription,
        meta: {
            title: ""
        }
    },
    {
        path: "/request-priest",
        component: RequestPriest,
        meta: {
            title: ""
        }
    },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router