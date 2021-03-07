import VueRouter from "vue-router";
import Checkout from "@/pages/Checkout";
import Consultant from "@/pages/Consultant";
import Consultants from "@/pages/Consultants";
import Home from "@/pages/Home";
/*import Order from "@/pages/Order";*/

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
      path: '/consultants/:type',
      name: 'TypeConsultants',
      component: Consultants,
      props: true
    },
    {
      path: '/consultant/:id',
      name: 'Consultant',
      component: Consultant,
      props: true
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ]
})


export default router;
