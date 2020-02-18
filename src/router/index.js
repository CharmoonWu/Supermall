// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const Car = () => import("../components/car/Car.vue");
const Home = () => import("../components/home/Home.vue");
const Like = () => import("../components/like/Like.vue");
const Profile = () => import("../components/profile/Profile.vue");
const Detail = () => import("../components/detail/Detail.vue");
const Category = () => import("../components/category/Category.vue");

var routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/car",
    component: Car
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/like",
    component: Like
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  },
  {
    path: "/category",
    component: Category
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
