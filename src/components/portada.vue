<script setup>
import tech01 from '@/assets/img/photshop.png'
import tech02 from '@/assets/img/illustrator.png'
import tech03 from '@/assets/img/indesign.png'
import tech04 from '@/assets/img/aftereffects.png'
import tech05 from '@/assets/img/premiere.png'
import tech06 from '@/assets/img/xd.png'
import tech07 from '@/assets/img/wordpress.png'
import tech08 from '@/assets/img/html.png'
import tech09 from '@/assets/img/css.png'
import tech10 from '@/assets/img/javascript.png'
import tech11 from '@/assets/img/visualstudiocode.png'
import tech12 from '@/assets/img/vue.png'
//CONTENIDO TECH
const tech = {
    photoshop: tech01,
    illustrator: tech02,
    indesign: tech03,
    aftereffects: tech04,
    premiere: tech05,
    xd: tech06,
    wordpress: tech07,
    html: tech08,
    css: tech09,
    javascript: tech10,
    vsc: tech11,
    vue: tech12,
}

</script>

<template>
    <div class="portada">
        <div class="foto-perfil">
            <img src="@/assets/img/andreu-bemo.png" alt="AndreuBemo">
        </div>
        <div class="descripcion">
            <h1>AndreuBemo</h1>
            <h3>diseñador gráfico frontend</h3>
            <p>Diseñador gráfico especializado en frontend y WordPress. Integré recientemente JavaScript (Vue.js) para
                añadir interactividad y funcionalidad excepcionales a mis proyectos. Fusiono la estética visual con el
                rendimiento técnico.</p>
            <p>7 años de experiencia como diseñador gráfico.</p>
            <p>Especializado en frontend y WordPress durante 3 años.</p>
            <p>Integración de JavaScript (Vue.js) en proyectos actuales.</p>
            <ul class="rrss">
                <li>
                    <a href="https://www.linkedin.com/in/andreu-bemo/" target="_blank"><img src="@/assets/img/linkedin.png"
                            alt="linkedin"></a>
                </li>
                <li>
                    <a href="https://github.com/andreubemo" target="_blank"><img src="@/assets/img/github.png"
                            alt="github"></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/andreubemo_com/" target="_blank"><img
                            src="@/assets/img/instagram.png" alt="instagram"></a>
                </li>
                <li>
                    <a href="https://open.spotify.com/user/andreubenitez?si=e2d9a3c3a9344668" target="_blank"><img
                            src="@/assets/img/spotify.png" alt="spotify"></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="tools">
        <h3>Herramientas</h3>
        <div class="tech-icons">
            <img v-for="(techItem, index) in tech" :key="index" :src="techItem" alt="Icono de tecnología">
        </div>
    </div>
</template>

<style scoped>
.portada {
    width: 100%;
    height: 38%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 144px 0px 76px;
}

.foto-perfil img {
    width: 275px;
    position: absolute;
    bottom: 0;
    filter: drop-shadow(6px 3px 9px #26262650);
    border-radius: 15px 0px 0px 15px;
}

.foto-perfil {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 275px;
    max-height: 30%;
    height: 381px;
    background-color: #F26241;
    border-radius: 15px 0px 0px 15px;
}

.descripcion {
    width: 526px;
    min-height: fit-content;
    height: 381px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #FFFCF7;
    color: #262626;
    padding: 29px 21px;
    border-top: #F26241;
    border-bottom: #262626;
    border-width: 15px 15px 15px 0px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #F26241, #262626, #000) 1 1 1 0;
    border-radius: 0px 15px 15px 0px;
}

.descripcion h1 {
    width: 100%;
    color: #262626;
    line-height: 1.6rem;
}

.descripcion h3 {
    width: 100%;
    color: #F26241;
    padding: 15px 0px;
    text-transform: uppercase;
}

.descripcion p {
    width: 100%;
    text-align: left;
    line-height: 1.38rem;
    padding: 0px 0px 11px;
    margin: 0px;
    color: #262626;
}

.descripcion p:last-child {
    width: 100%;
    text-align: left;
    margin: 0px;
    background: #262626;
    color: #FFFCF7;
}

.tools {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    padding: 21px;
    margin: 0px 0px 39px;
    background: #262626;
}

.tools h3 {
    text-align: center;
    font-weight: 400;
    width: 100%;
    color: #FFFCF7;
    text-transform: uppercase;
}

.tech-icons {
    width: 768px;
    display: flex;
    gap: 29px;
    justify-content: space-evenly;
}

.tech-icons img {
    filter: grayscale(1);
    height: 30px;
    transition: transform 0.3s ease;
}

.tech-icons img:hover {
    filter: grayscale(0);
    transform: scale(1.2);
}

.rrss {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 39px;
    list-style: none;
    padding-inline-start: 0px;
    padding: 11px 0px 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
}

.rrss li {
    width: fit-content;
    text-align: center;
}

.rrss li img {
    width: 29px;
    filter: grayscale(1);
    transition: 0.3s ease;
}

.rrss li img:hover {
    filter: none;
    transform: scale(1.3);
}

/* @media only screen and (max-width: 768px) {
    .portada {
        width: 100%;
        height: 38%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
    }

    .tools {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 21px;
        padding: 21px;
        margin: 29px 0px 39px;
        background: #262626;
    }

    .rrss li img {
        width: 29px;
        filter: none;
        transition: 0.3s ease;
    }
} */

@media only screen and (max-width: 768px) {
    .portada {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 173px 0px 0px;
    }

    .foto-perfil {
        position: relative;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background-color: #F26241;
        border-radius: 0px;
    }

    .foto-perfil img {
        width: 200px;
        position: absolute;
        z-index: -1;
        bottom: -50px;
        filter: drop-shadow(6px 3px 9px #26262650);
        border-radius: 0px;
    }


    .descripcion {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #262626;
    color: #FFFCF7;
    padding: 21px 11px;
    border-width: 0px 0px 0px 0px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #F26241, #262626, #000) 1 1 1 0;
    border-radius: 0px 0px 0px 0px;
    }

    .descripcion h1 {
        width: 100%;
        color: #FFFCF7;
        padding: 0px 21px 0px;
        line-height: 3.2rem;
        text-align: center;
    }

    .descripcion h3 {
        text-align: center;
        width: 100%;
        color: #F26241;
        padding: 15px 0px;
        text-transform: uppercase;
    }

    .descripcion p {
        width: 100%;
        text-align: left;
        padding: 11px 0px 15px;
        margin: 0px;
        background: #262626;
        color: #FFFCF7;
        text-align: center;
    }

    .tools {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 21px;
        padding: 15px 0px 29px;
        margin: 15px 0px 39px;
        background: #262626;
    }

    .tools h3 {
        text-align: center;
        font-weight: 400;
        width: 100%;
        color: #FFFCF7;
        text-transform: uppercase;
    }

    .tech-icons {
        width: 90%;
        display: flex;
        gap: 29px;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .tech-icons img {
        height: 30px;
        filter: none;
        transition: transform 0.3s ease;
    }

    .rrss {
        width: 381px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 29px 0px;
        padding-inline-start: 0px;
    }

    .rrss li {
        width: fit-content;
        text-align: center;
    }

    .rrss li img {
        width: 29px;
        filter: none;
        transition: 0.3s ease;
    }

}
</style>