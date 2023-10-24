<script setup>
import { ref } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import SelectorRange from "./views/SelectorRange.vue";
import Portfolio from "./views/Portfolio.vue";
import SignUp from "./views/SignUp.vue";
import NavBar from "./components/NavBar.vue";
import footerApp from "./components/footerApp.vue";

const routes = [
  { path: "/", component: SelectorRange },
  { path: "/portfolio", component: Portfolio },
  { path: "/signup", component: SignUp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const links = ref([
  { path: "/", text: "Currículum" },
  { path: "/portfolio", text: "Portfolio" },
  { path: "/signup", text: "Sign Up" },
]);
</script>

<template>
  <NavBar></NavBar>
  <div class="bg">
    <router-view />
  </div>
  <footerApp />
</template>

<style scoped>
.bg {
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;
}
</style>
