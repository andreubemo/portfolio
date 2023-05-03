<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import SelectorRange from '@/views/SelectorRange.vue'
import SignUp from '@/views/SignUp.vue'
import Portfolio from '@/views/Portfolio.vue'
import AbLogo from '@/components/AbLogo.vue'

const routes = [
    {
        path: '/',
        name: 'cvDinamico',
        component: SelectorRange,
        default: true
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const isScrolled = ref(false)
const showMenu = ref(false)

const links = ref([
    { path: '/', text: 'CV Dinámico' },
    { path: '/portfolio', text: 'Portfolio' },
    { path: '/signup', text: 'Contacto' },
])


//EFECTO NAVEGADOR
el: '#nav';
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
    showMenu.value = !showMenu.value
}

const closeMenu = () => {
    showMenu.value = false
}

const route = useRoute()

// Función para detectar si el usuario ha hecho scroll
const handleScroll = () => {
    isScrolled.value = window.pageYOffset > 0
}

// Event listeners
window.addEventListener('scroll', handleScroll)

// Se elimina el event listener al destruir el componente
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav :class="{ 'scrolled-down': isScrolled }" id="nav">
        <div class="container">
            <router-link :to="'/'">
                <AbLogo />
            </router-link>
            <div class="menu">
                <ul class="lista-menu" :class="{ 'show-menu': showMenu }">
                    <li v-for="link in links" :key="link.path">
                        <router-link :to="link.path" class="a" exact-active-class="link-active" @click="closeMenu">
                            {{ link.text }}
                        </router-link>
                    </li>
                </ul>
                <button class="menu-icon" @click="toggleMenu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 55px;
    margin: 0px;
    padding: 0px 0px;
}

.menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 15px 0px;
}

ul {
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 29px;
}

li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    text-align: center;
}

.logo {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.62rem;
    letter-spacing: 0.06rem;
    margin-left: 15px;
}

.lista-menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.menu-icon {
    display: none;
}

.a {
    color: #737373;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0px;
}

.a:hover {
    color: #F26241;
    margin: 0px;
}

.link-active {
    color: #F26241;
    border: 1px solid #F26241;
    border-radius: 5px;
    padding: 11px 15px;
    margin: 0px;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: #262626;
    transition: 0.6s;
    padding: 20px 0px;
}

nav.scrolled-down {
    height: 62px;
    box-shadow: 0px -5px 16px #262620;
}

nav.scrolled-down img {
    scale: 1.06;
}

nav img {
    height: 38px;
    transform-origin: 0% 50%;
    transition: 0.3s;
}


@media only screen and (max-width: 768px) {
    .container {
        padding: 0 5%;
    }

    .menu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding: 0px;
    }

    .lista-menu {
        display: none;
        position: absolute;
        top: 62px;
        left: 0;
        width: 100%;
        background-color: #262626;
        text-align: center;
        padding-top: 20px;
        z-index: 1;
    }

    .lista-menu.show-menu {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 76px;
        animation: menu 0.3s ease-in forwards;
    }

    @keyframes menu {
        0% {
            background: #262626;
            height: 0vh;
        }

        100% {
            background: #F26241;
            height: 100vh;
        }
    }

    .lista-menu li {
        margin: 0px;
    }

    .menu-icon {
        display: block;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
    }

    .menu-icon:hover {
        color: #FFFCF7;
    }

    .a {
        color: #FFFCF7;
        font-weight: 200;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0px;
    }

    .a:hover {
        color: #FFFCF7;
        font-weight: 400;
        margin: 0px;
    }

    .link-active {
        color: #FFFCF7;
        font-weight: 400;
        border: 2px solid #FFFCF7;
        margin: 0px;
    }
}

@media only screen and (max-width: 425px) {
    .container {
        padding: 0px;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 144px;
        text-align: center;
    }

    .menu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        padding: 0px;
    }

    .lista-menu {
        display: none;
        position: absolute;
        top: 62px;
        left: 0;
        width: 100%;
        background-color: #262626;
        text-align: center;
        padding-top: 20px;
        z-index: 1;
    }

    .lista-menu.show-menu {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 76px;
        animation: menu 0.3s ease-in forwards;
    }

    @keyframes menu {
        0% {
            background: #262626;
            height: 0vh;
        }

        100% {
            background: #F26241;
            height: 62vh;
        }
    }

    .lista-menu li {
        margin: 0px;
    }

    .menu-icon {
        display: block;
        background-color: transparent;
        border: none;
        font-size: 1.5rem;
        color: #fff;
        cursor: pointer;
    }

    .menu-icon:hover {
        color: #FFFCF7;
    }

    .a {
        color: #FFFCF7;
        font-weight: 200;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0px;
    }

    .a:hover {
        color: #FFFCF7;
        font-weight: 400;
        margin: 0px;
    }

    .link-active {
        color: #FFFCF7;
        font-weight: 400;
        border: 2px solid #FFFCF7;
        margin: 0px;
    }
}</style>