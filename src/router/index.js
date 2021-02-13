import VueRouter from "vue-router";
import Consultants from "@/pages/Consultants";
import Order from "@/pages/Order";

const router = new VueRouter({
  routes: [
    {
      path: '/consultants',
      name: 'Consultants',
      component: Consultants
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },

  ]
})


export default router;
