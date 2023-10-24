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
import mockupEsdeveniments01 from "@/assets/img/mockup-esdeveniments-01.png";
import mockupEsdeveniments02 from "@/assets/img/mockup-esdeveniments-02.png";
import mockupEsdeveniments03 from "@/assets/img/mockup-esdeveniments-03.png";
import fotoPerfil from "@/assets/img/andreu-bemo.png";
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
      <div class="title">
        <h1>andreu benítez</h1>
        <h2>diseñador UX/UI</h2>
      </div>
      <div class="wrapper">
        <img :src="fotoPerfil" alt="andreu-benitez" class="profile-image" />
      </div>
      <div class="character">
        <h1>andreu benítez</h1>
        <h2>diseñador UX/UI</h2>
        <div class="descripcion">
          <p>
            Diseñador de producto digital (UX/UI) | Javascript | Especializado
            en branding y tipografía web
          </p>
          <p>5 años de experiencia como diseñador gráfico.</p>
          <p>3 años de experiencia como diseñador UX/UI</p>
          <p>1 año de experiencia en entornos Javascript (React y Vue.js)</p>
        </div>
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
        <ul class="rrss">
          <li>
            <a
              href="https://www.linkedin.com/in/andreubenitezmoreno/"
              target="_blank"
              ><img src="@/assets/img/linkedin.png" alt="linkedin"
            /></a>
          </li>
          <li>
            <a href="https://github.com/andreubemo/portfolio" target="_blank"
              ><img src="@/assets/img/github.png" alt="github"
            /></a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/andreubenitez?si=e2d9a3c3a9344668"
              target="_blank"
              ><img src="@/assets/img/spotify.png" alt="spotify"
            /></a>
          </li>
        </ul>
        <!-- <div class="tools">
          <h3>herramientas</h3>
          <div class="tech-icons">
            <img
              v-for="(techItem, index) in tech"
              :key="index"
              :src="techItem"
              alt="Icono de tecnología"
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  margin: 62px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  height: 550px;
  margin: auto;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 200px;
}
.wrapper {
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  border: 3px solid #403833;
  transition: all 0.3s;
  position: absolute;
  top: 50px;
  padding: 4px;
}

.card:hover .wrapper {
  transform: translateY(-180px) scale(0.8);
  border-radius: 200px;
  border: 2px solid #f1ff00;
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  position: absolute;
  z-index: -2;
}
.wrapper::before {
  top: 0;
  height: 100%;
}
.wrapper::after,
.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}
.title {
  width: 100%;
  padding: 0px;
  color: #403833;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  position: absolute;
  bottom: 200px;
}
.card:hover .title {
  /* transform: translate3d(0%, 100px, 100px); */
  opacity: 0;
}
.title h1 {
  width: 100%;
  text-align: center;
}
.title h2 {
  text-align: center;
  padding-top: 15px;
  background: #f1ff00;
  color: #403833;
  display: flex;
  justify-content: flex-start;
}
.character {
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  position: absolute;
  z-index: -1;
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -50px, 100px);
}

.character h1 {
  width: 100%;
  text-align: center;
}

.character h2 {
  text-align: center;
  padding-top: 15px;
  background: #f1ff00;
  color: #403833;
  display: flex;
  justify-content: flex-start;
}
.descripcion {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 0px 0px;
}
.character p {
  width: 100%;
  text-align: center;
  line-height: 1.38rem;
  margin: 0px;
}

.tools {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 21px 0px;
  margin: 0px 0px;
  background: #fff;
}

.tools h3 {
  width: 400px;
  text-align: center;
  color: #403833;
}

.tech-icons {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
  justify-content: space-evenly;
}
.tech-icons img {
  filter: grayscale(1);
  width: 25px;
  height: 25px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.tech-icons img:hover {
  filter: grayscale(0);
  transform: scale(1.2);
}

.rrss {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  list-style: none;
  padding: 30px 0px 15px;
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

.rrss li a img {
  filter: grayscale(100%);
}

.esdeveniments {
  width: 100%;
  padding: 30px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.info-esde {
  width: 50%;
  padding: 5px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.info-esde p {
  width: 100%;
  background: #fff;
  text-align: left;
  padding-bottom: 3px;
}
.info-esde img {
  width: 100%;
  margin: auto;
  object-fit: contain;
}
.mockup-esde {
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}
.mockup-esde img {
  height: 100px;
  object-fit: cover;
}
@media only screen and (max-width: 480px) {
  .card {
    width: 350px;
    height: 550px;
    margin: auto;
    padding-top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
