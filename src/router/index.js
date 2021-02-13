import VueRouter from "vue-router";
import Consultants from "@/pages/Consultants";

const router = new VueRouter({
  routes: [
    {
      path: '/consultants',
      name: 'Consultants',
      component: Consultants
    }
  ]
})


export default router;
