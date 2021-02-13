import VueRouter from "vue-router";
import Consultants from "@/pages/Consultants";
import Consultant from "@/pages/Consultant";
import Order from "@/pages/Order";
import Home from "@/pages/Home";

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/consultants',
      name: 'Consultants',
      component: Consultants
    },
    {
      path: '/consultant',
      name: 'Consultant',
      component: Consultant
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
  ]
})


export default router;
