<script setup>
import tech01 from "@/assets/img/photshop.png";
import tech02 from "@/assets/img/illustrator.png";
import tech03 from "@/assets/img/indesign.png";
import tech04 from "@/assets/img/aftereffects.png";
import tech05 from "@/assets/img/premiere.png";
import tech06 from "@/assets/img/figma.png";
import tech07 from "@/assets/img/wordpress.png";
import tech08 from "@/assets/img/html.png";
import tech09 from "@/assets/img/css.png";
import tech10 from "@/assets/img/javascript.png";
import tech11 from "@/assets/img/visualstudiocode.png";
import tech12 from "@/assets/img/vue.png";
import tech13 from "@/assets/img/react.png";
import logoEsdeveniments from "@/assets/img/logo-esdeveniments.png";
import fotoPerfil from "@/assets/img/foto-perfil-instagram-.webp";
//CONTENIDO TECH
const tech = {
  photoshop: tech01,
  illustrator: tech02,
  indesign: tech03,
  aftereffects: tech04,
  premiere: tech05,
  figma: tech06,
  wordpress: tech07,
  vsc: tech11,
  html: tech08,
  css: tech09,
  javascript: tech10,
  react: tech13,
  vue: tech12,
};
</script>

<template>
  <div class="container">
    <div class="card">
      <div class="wrapper">
        <img :src="fotoPerfil" alt="andreu-benitez" class="profile-image" />
        <div class="circulo"></div>
      </div>
      <div class="character">
        <h2>andreu benítez</h2>
        <h1>Diseñador gráfico UX/UI</h1>
        <div class="descripcion">
          <p>
            <span>Diseñador gráfico web (UX/UI)</span><br />
            React, Vue.js | Css, Tailwind | Wordpress
          </p>
          <ul>
            <li>
              <span>5 años de experiencia como diseñador gráfico.</span>
            </li>
            <li>
              <span
                >3 años de experiencia en Wordpress como diseñador UX/UI</span
              >
            </li>
            <li>
              <span
                >2 año de experiencia con React y Vue.js y maquetando con Css y
                Tailwindcss.</span
              >
            </li>
            <li>
              Actualmente estoy maquetando y desarrollando
              <a
                class="esdeveniments"
                href="https://www.esdeveniments.cat/"
                alt="esdeveniments-cat"
                target="_blank"
                >esdeveniments.cat</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-card">
          <a
            class="esdeveniments"
            href="https://www.esdeveniments.cat/"
            alt="esdeveniments-cat"
            target="_blank"
          >
            <div class="info-esde">
              <img :src="logoEsdeveniments" alt="logo-esdeveniments" />
              <p>esdeveniments.cat</p>
            </div>
          </a>
          <div class="rrss">
            <a
              href="https://www.linkedin.com/in/andreubenitezmoreno/"
              target="_blank"
              ><img src="@/assets/img/linkedin.png" alt="linkedin"
            /></a>
            <a href="https://github.com/andreubemo/portfolio" target="_blank"
              ><img src="@/assets/img/github.png" alt="github"
            /></a>
          </div>
        </div>
        <div class="tech-icons">
          <img
            v-for="(techItem, index) in tech"
            :key="index"
            :src="techItem"
            alt="Icono de tecnología"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin: 82px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  margin: 0px 15px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 200px;
  position: absolute;
  z-index: 1;
}
.circulo {
  width: 155px;
  height: 155px;
  background: linear-gradient(135deg, #fff200, #ffe700, #ffb700);
  border-radius: 200px;
  border: 0px solid #332f18;
  position: absolute;
  z-index: 0;
  animation: profile 2s ease-in-out infinite;
}
@keyframes profile {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.wrapper {
  width: 200px;
  margin-top: 130px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  position: relative;
  left: -90px;
}
.character {
  background: #fff;
  width: 100%;
  padding: 60px 23px 23px;
  margin-top: 0px;
  box-shadow: 0px 0px 60px -25px #bfbdba;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: all 0.3s;
}
.character h2 {
  width: 100%;
  text-align: right;
}
.character h1 {
  width: 100%;
  padding-top: 15px;
  background: #fff100;
}
.descripcion {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 0px;
}
.character p {
  width: 100%;
  line-height: 1.38rem;
  margin: 0px;
}
.character p span {
  line-height: 1.38rem;
  margin: 0px;
}
.rrss {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin-right: 10px;
}
.rrss img {
  width: 29px;
  filter: grayscale(1);
  transition: 0.3s ease;
}

.rrss img:hover {
  filter: none;
  transform: scale(1.1);
}

.rrss a img {
  filter: grayscale(100%);
}
.esdeveniments {
  width: 50%;
  padding: 0px 0px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.info-esde {
  width: 100%;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
}
.info-esde p {
  width: 100%;
  background: #fff;
  text-align: center;
  padding-bottom: 15px;
}
.info-esde img {
  width: 250px;
  padding: 15px 0px 0px;
  object-fit: contain;
}
.footer-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
}
.tech-icons img {
  height: 25px;
}
@media only screen and (max-width: 768px) {
  .container {
    width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 200px;
    padding-top: 50px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 200px;
    padding-top: 130px;
    border-radius: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
}
</style>
