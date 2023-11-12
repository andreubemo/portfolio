<script setup>
import { ref, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import SelectorRange from "@/views/SelectorRange.vue";
import SignUp from "@/views/SignUp.vue";
import Portfolio from "@/views/Portfolio.vue";
import AbLogo from "@/components/AbLogo.vue";

const routes = [
  {
    path: "/",
    name: "Currículum",
    component: SelectorRange,
    default: true,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isScrolled = ref(false);
const showMenu = ref(false);

const links = ref([
  { path: "/", text: "currículum" },
  { path: "/portfolio", text: "portfolio" },
  { path: "/signup", text: "contacto" },
]);

//EFECTO NAVEGADOR
el: "#nav";
const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    if (!nav.classList.contains("scrolled-down")) {
      nav.classList.add("scrolled-down");
    }
  } else {
    if (nav.classList.contains("scrolled-down")) {
      nav.classList.remove("scrolled-down");
    }
  }
};
document.addEventListener("scroll", onScroll);

//RESPONSIVE
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};

const route = useRoute();

// Función para detectar si el usuario ha hecho scroll
const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0;
};

// Event listeners
window.addEventListener("scroll", handleScroll);

// Se elimina el event listener al destruir el componente
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="{ 'scrolled-down': isScrolled }" id="nav">
    <div class="container">
      <router-link class="logo" :to="'/'">
        <AbLogo />
      </router-link>
      <ul class="lista-menu" :class="{ 'show-menu': showMenu }">
        <li v-for="link in links" :key="link.path">
          <router-link
            :to="link.path"
            class="a"
            exact-active-class="link-active"
            @click="closeMenu"
          >
            <p>{{ link.text }}</p>
          </router-link>
        </li>
      </ul>
      <a class="menu-icon" @click="toggleMenu">
        <i :class="showMenu ? 'fas fa-times' : 'fas fa-bars'"></i>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin: 0px;
  padding: 0px 0px;
}
.logo {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lista-menu {
  width: 500px;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  list-style: none;
}

li {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.menu-icon {
  display: none;
}

.a p {
  width: 120px;
  color: #403833;
  padding-top: 15px;
  display: flex;
  justify-content: flex-start;
  transition: all 0.5s;
}

.a:hover p {
  width: 120px;
  background: #fff100;
  color: #403833;
  padding-top: 15px;
  margin: 0px;
}

.link-active p {
  width: 120px;
  background: #fff100;
  color: #403833;
  font-weight: 575;
  padding-top: 15px;
  margin: 0px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 501;
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  transition: 0.6s;
  padding: 20px 0px;
}

nav.scrolled-down {
  height: 70px;
  box-shadow: 0px -25px 45px 10px #bfbdba;
}

@media only screen and (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding-top: 0px;
  }

  .lista-menu {
    width: 100%;
    height: 100vh;
    background: #fff;
    padding-bottom: 400px;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    animation: menu 0.3s ease-in-out forwards;
  }

  .lista-menu.show-menu {
    width: 100%;
    height: 100vh;
    background: #fff;
    padding-bottom: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 50px;
    position: absolute;
    left: 0px;
    z-index: 1;
    animation: menu 0.3s ease-in-out forwards;
  }

  @keyframes menu {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }

    100% {
      opacity: 1;
      transform: translateY(50px);
    }
  }

  .lista-menu li {
    margin: 0px;
  }

  .menu-icon {
    width: 60px;
    padding-top: 4px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-icon:hover {
    width: 60px;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .a p {
    width: 120px;
    color: #403833;
    padding-top: 15px;
    transition: all 0.5s;
  }

  .a:hover p {
    width: 120px;
    background: #fff10050;
    color: #403833;
    padding-top: 15px;
    margin: 0px;
  }

  .link-active p {
    width: 120px;
    background: #fff100;
    color: #403833;
    font-weight: 600;
    padding-top: 15px;
    margin: 0px;
  }
}
</style>
