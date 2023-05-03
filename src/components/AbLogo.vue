<template>
    <div class="container-logo" @mouseover="animateLogo">
        <img src="@/assets/img/logo-andreu-bemo-mayor.svg" alt="Logo" />
        <img src="@/assets/img/logo-andreu-bemo-3.svg" alt="Logo" ref="logo" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const logo = ref(null);

function animateLogo() {
    logo.value.classList.add('animate-spin');
    setTimeout(() => {
        logo.value.classList.remove('animate-spin');
    }, 5000);
}
</script>

<style scoped>
.container-logo {
    display: flex;
    flex-direction: row;
    margin: 2%;
}

img {
    height: 30px;
}

.animate-spin {
    animation: spin 1s ease infinite;
}

@keyframes spin {
    0% {
        transform: translate(0px);
    }

    18% {
        transform: translateX(2px);
    }

    42% {
        transform: translateX(0px);
    }

    60% {
        transform: translateX(1px);
    }

    100% {
        transform: translateX(0px);
    }
}
</style>