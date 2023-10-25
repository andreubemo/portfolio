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
      <!-- <div class="title">
        <h1>andreu benítez</h1>
        <h2>diseñador UX/UI</h2>
      </div> -->
      <div class="wrapper">
        <img :src="fotoPerfil" alt="andreu-benitez" class="profile-image" />
        <div class="circulo"></div>
      </div>
      <div class="character">
        <h1>andreu benítez</h1>
        <h2>diseñador UX/UI</h2>
        <div class="descripcion">
          <p>
            - <span>diseñador de producto digital (UX/UI)</span>
            | Javascript | Especializado en branding y tipografía web
          </p>
          <p>- <span>5 años de experiencia</span> como diseñador gráfico.</p>
          <p>- <span>3 años de experiencia</span> como diseñador UX/UI</p>
          <p>
            - <span>1 año de experiencia</span> en entornos Javascript (React y
            Vue.js)
          </p>
          <p>
            - <span>actualmente</span> estoy desarrollando esdeveniments.cat
          </p>
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
            <!-- <li>
            <a
              href="https://open.spotify.com/user/andreubenitez?si=e2d9a3c3a9344668"
              target="_blank"
              ><img src="@/assets/img/spotify.png" alt="spotify"
            /></a>
          </li> -->
          </ul>
        </div>
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
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  height: 550px;
  margin: 0px 15px;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.profile-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 200px;
  position: absolute;
  z-index: 1;
}
.circulo {
  width: 188px;
  height: 188px;
  background: linear-gradient(135deg, #fff200, #ffe700, #ffd400);
  border-radius: 200px;
  border: 0px solid #403833;
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
  padding-top: 160px;
  padding-left: 60px;
  border-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.character {
  background: #fff;
  width: 100%;
  padding: 100px 23px 23px;
  margin-top: 0px;
  box-shadow: 0px 0px 60px -25px #bfbdba;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: all 0.3s;
}
.character h1 {
  width: 100%;
}
.character h2 {
  width: 100%;
  padding-top: 15px;
  background: #fff100;
  color: #403833;
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
  width: 45%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  list-style: none;
  margin-right: 10px;
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
  width: 45%;
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
@media only screen and (max-width: 768px) {
  .container {
    min-width: 350px;
    max-width: 600px;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    width: 600px;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
